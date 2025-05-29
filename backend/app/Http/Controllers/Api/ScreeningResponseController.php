<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ScreeningResponse;
use App\Models\ScreenRecord;
use App\Models\Question;
use App\Models\Client;

class ScreeningResponseController extends Controller
{
    // GET /api/screening-responses
    
    public function index(Request $request)
    {
        $query = ScreeningResponse::with([
            'question',
            'screenRecord.client.classroom',
            'screenRecord.client.school'
        ])->latest();
    
        // Optional filter by client name
        if ($request->has('name')) {
            $name = $request->input('name');
            $query->whereHas('screenRecord.client', function ($q) use ($name) {
                $q->where('name', 'like', "%$name%");
            });
        }
    
        $responses = $query->get();
    
        // Group by screen_record_id
        $grouped = $responses->groupBy('screen_record_id')->map(function ($group) {
            $record = $group->first()->screenRecord;
            return [
                'screen_record_id' => $record->id,
                'client_id' => $record->client_id,
                'client_name' => optional($record->client)->name,
                'client_code' => optional($record->client)->code,
                'classroom' => optional($record->client->classroom)->name,
                'school' => optional($record->client->school)->name,
                'responses' => $group->map(function ($r) {
                    return [
                        'id' => $r->id,
                        'question' => $r->question->question_text,
                        'answer' => $r->answer,
                        'comment' => $r->comment,
                    ];
                })->values()
            ];
        })->values();
    
        return response()->json([
            'data' => $grouped
        ]);
    }
    

    //initial submit 

public function initialSubmit(Request $request)
{
    $data = $request->validate([
        'demographic' => 'required|array',
        'parental' => 'required|array',
        'academic' => 'nullable|array',
        'physical' => 'nullable|array',
        'final' => 'nullable|array',
    ]);

    // Fixed question number mapping for each section
    $demographicQuestionMap = [
        'schoolId' => 1,
        'classId' => 2,
        'fullName' => 3,
        'participantCode' => 4,
        'dob' => 5,
        'age' => 6,
        'gender' => 7,
        'homeAddress' => 8,
        'religion' => 9,
        'division' => 10,
        'email' => 11,
        'phoneCode' => 12,
        'phoneNumber' => 13,
        'whatsappCode' => 14,
        'whatsappNumber' => 15,
    ];
    $parentalQuestionMap = [
        'parentName' => 16,
        'parentPhone' => 17,
        'relationship' => 18,
        'occupation' => 19,
        'parentWhatsapp' => 20,
        'parentEmail' => 21,
        'parentAddress' => 22,
    ];
    $academicQuestionMap = [
        'learnerTypes' => 23,
        'enjoyDoing' => 24,
        'futureGoal' => 25,
        'firstTerm' => 26,
        'secondTerm' => 27,
        'thirdTerm' => 28,
        'desiredAverage' => 29,
    ];
    $physicalQuestionMap = [
        'height' => 30,
        'weight' => 31,
        'bmi' => 32,
        'menarch' => 33,
        'vision' => 34,
        'waist' => 35,
        'armCircumference' => 36,
        'ent' => 37,
        'observedCondition' => 38,
    ];
    $finalQuestionMap = [
        'impact' => 39,
        'summary' => 40,
    ];

    $sectionMaps = [
        'demographic' => $demographicQuestionMap,
        'parental' => $parentalQuestionMap,
        'academic' => $academicQuestionMap,
        'physical' => $physicalQuestionMap,
        'final' => $finalQuestionMap,
    ];

    $responses = [];
    $clientValues = [];

    foreach ($sectionMaps as $section => $map) {
        if (!empty($data[$section])) {
            foreach ($map as $field => $questionNumber) {
                if (isset($data[$section][$field])) {
                    $value = $data[$section][$field];
                    $responses[] = [
                        'question_number' => $questionNumber,
                        'answer' => is_scalar($value) ? $value : json_encode($value),
                        'comment' => null,
                        'created_at' => now(),
                        'updated_at' => now(),
                    ];

                    // Set client values as needed
                    if ($section === 'demographic') {
                        if ($field === 'classId') $clientValues['classroom_id'] = intval($value);
                        if ($field === 'fullName') $clientValues['name'] = $value;
                        if ($field === 'participantCode') $clientValues['code'] = $value;
                        if ($field === 'age') $clientValues['age'] = intval($value);
                        if ($field === 'dob') $clientValues['dob'] = $value;
                        if ($field === 'gender') {
                            $validGenders = ['male', 'female', 'other'];
                            $gender = is_scalar($value) ? strtolower(trim($value)) : null;
                            $clientValues['gender'] = in_array($gender, $validGenders) ? $gender : null;
                        }
                    }
                }
            }
        }
    }

    // Validate that required values exist before creating client
    if (!isset($clientValues['classroom_id'], $clientValues['name'], $clientValues['code'], $clientValues['age'])) {
        return response()->json([
            'message' => 'Missing required client information from screening answers (classId, fullName, participantCode, or age).',
        ], 422);
    }

    // 1. Create Client
    $client = \App\Models\Client::create([
        'classroom_id' => $clientValues['classroom_id'],
        'name' => $clientValues['name'],
        'code' => $clientValues['code'],
        'age' => $clientValues['age'],
        'gender' => $clientValues['gender'] ?? null,
        'followup_status' => null,
    ]);

    // 2. Add client_id to each response
    foreach ($responses as &$r) {
        $r['client_id'] = $client->id;
    }

    // 3. Bulk insert responses
    \App\Models\ScreeningResponse::insert($responses);

    return response()->json([
        'message' => 'Initial responses saved and client created.',
        'screen_record_id' => $client->id,
    ], 201);
}




    // GET /api/screening-responses/{id}
    public function show($id)
    {
        $response = ScreeningResponse::with([
            'question',
            'screenRecord.client.classroom',
            'screenRecord.client.school'
        ])->findOrFail($id);

        return response()->json([
            'id' => $response->id,
            'question' => $response->question->question_text,
            'answer' => $response->answer,
            'comment' => $response->comment,
            'client_id' => $response->screenRecord->client_id,
            'client_code' => optional($response->screenRecord->client)->code,
            'classroom' => optional($response->screenRecord->client->classroom)->name ?? null,
            'school' => optional($response->screenRecord->client->school)->name ?? null,
        ]);
    }

    // POST /api/screening-responses
   

    public function store(Request $request)
{
    $validated = $request->validate([
        'client_id' => 'required|exists:users,id',
        'question_number' => 'required|exists:questions,number',
        'answer' => 'required|string',
        'comment' => 'nullable|string',
    ]);

    // ❌ Prevent duplicate screen records
    $existing = ScreenRecord::where('client_id', $validated['client_id'])->first();
    if (!$existing) {
        $screenRecord = ScreenRecord::create([
            'client_id' => $validated['client_id'],
            'sevierity' => null,
        ]);
    } else {
        return response()->json([
            'message' => 'This client already has a screening record.',
        ], 422);
    }

    // ✅ Create response
    $response = ScreeningResponse::create([
        'screen_record_id' => $screenRecord->id,
        'question_number' => $validated['question_number'],
        'answer' => $validated['answer'],
        'comment' => $validated['comment'] ?? null,
    ]);

    // 🔁 Recalculate sevierity if relevant
    if ($validated['question_number'] >= 54 && $validated['question_number'] <= 100) {
        $allResponses = ScreeningResponse::where('screen_record_id', $screenRecord->id)
            ->whereBetween('question_number', [54, 100])
            ->pluck('answer');

        $yesCount = $allResponses->filter(fn($ans) => strtolower(trim($ans)) === 'yes')->count();
        $percentage = round($yesCount * 2.13, 2);

        $sevierity = match (true) {
            $percentage >= 80 => 'critical',
            $percentage >= 61 => 'high',
            $percentage >= 31 => 'mild',
            default => 'moderate',
        };

        $screenRecord->update(['sevierity' => $sevierity]);
    }

    return response()->json([
        'message' => 'Response recorded and severity calculated.',
        'data' => $response
    ], 201);
}


    // PUT /api/screening-responses/{id}
    public function update(Request $request, $id)
    {
        $response = ScreeningResponse::findOrFail($id);

        $validated = $request->validate([
            'answer' => 'sometimes|required|string',
            'comment' => 'nullable|string',
        ]);

        $response->update($validated);

        return response()->json([
            'message' => 'Response updated successfully.',
            'data' => $response
        ]);
    }

    // DELETE /api/screening-responses/{id}
    public function destroy($id)
    {
        $response = ScreeningResponse::findOrFail($id);
        $response->delete();

        return response()->json([
            'message' => 'Response deleted successfully.'
        ]);
    }

    //evaluate

    public function submitChecklistAnswers(Request $request)
{
    $data = $request->validate([
        'screen_record_id' => 'required|exists:clients,id',
        'responses' => 'required|array',
        'responses.*.question_number' => 'required|integer|between:54,100',
        'responses.*.answer' => 'required|string',
        'responses.*.comment' => 'nullable|string',
    ]);

    $screenRecordId = $data['screen_record_id'];

    // Prepare responses
    $entries = [];
    foreach ($data['responses'] as $response) {
        $entries[] = [
            'client_id' => $screenRecordId,
            'question_number' => $response['question_number'],
            'answer' => $response['answer'],
            'comment' => $response['comment'] ?? null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    // Insert responses in bulk
    \App\Models\ScreeningResponse::insert($entries);

    // Calculate severity based on "yes" answers
    $yesCount = \App\Models\ScreeningResponse::where('client_id', $screenRecordId)
        ->whereBetween('question_number', [54, 100])
        ->whereRaw("LOWER(TRIM(answer)) = 'yes'")
        ->count();

    $percentage = round($yesCount * 2.13, 2);

    $sevierity = match (true) {
        $percentage >= 80 => 'critical',
        $percentage >= 61 => 'high',
        $percentage >= 31 => 'mild',
        default => 'moderate',
    };

    \App\Models\Client::where('id', $screenRecordId)->update(['sevierity' => $sevierity]);

    return response()->json([
        'message' => 'Checklist responses saved and severity updated.',
        'severity' => $sevierity,
        'percentage' => $percentage,
    ], 201);
}

}
