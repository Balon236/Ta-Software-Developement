<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    // GET /api/clients?manager_id=1
    public function index(Request $request)
    {
        $managerId = $request->query('manager_id');

        $clients = Client::with(['consultant', 'school', 'classroom', 'specialty'])
            ->when($managerId && $managerId !== '1', function ($query) use ($managerId) {
                $query->whereHas('classroom', function ($q) use ($managerId) {
                    $q->where('manager_id', $managerId);
                });
            })
            ->latest()
            ->get();

        return response()->json(['data' => $clients]);
    }

    // GET /api/clients/{id}
    public function show($id)
    {
        $client = Client::with(['consultant', 'school', 'classroom', 'specialty'])->findOrFail($id);
        return response()->json($client);
    }

    // POST /api/clients
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'code' => 'nullable|string|max:255|unique:clients,code',
            'screened' => 'nullable|in:yes,no',
            'sevierity' => 'nullable|in:critical,high,mild,moderate',
            'consultant_id' => 'nullable|exists:users,id',
            'school_id' => 'nullable|exists:schools,id',
            'classroom_id' => 'nullable|exists:classrooms,id',
            'specialty_id' => 'nullable|exists:specialties,id',
        ]);

        $client = Client::create($validated);
        return response()->json([
            'message' => 'Client created successfully.',
            'data' => $client
        ], 201);
    }

    // PUT /api/clients/{id}
    public function update(Request $request, $id)
    {
        $client = Client::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'code' => 'sometimes|string|max:255|unique:clients,code,' . $id,
            'screened' => 'nullable|in:yes,no',
            'sevierity' => 'nullable|in:critical,high,mild,moderate',
            'consultant_id' => 'nullable|exists:users,id',
            'school_id' => 'nullable|exists:schools,id',
            'classroom_id' => 'nullable|exists:classrooms,id',
            'specialty_id' => 'nullable|exists:specialties,id',
        ]);

        $client->update($validated);

        return response()->json([
            'message' => 'Client updated successfully.',
            'data' => $client
        ]);
    }

    // DELETE /api/clients/{id}
    public function destroy($id)
    {
        $client = Client::findOrFail($id);
        $client->delete();

        return response()->json([
            'message' => 'Client deleted successfully.'
        ]);
    }

    // GET /api/clients/filter/sevierity/{level}
    public function filterBySevierity($level)
    {
        $allowed = ['critical', 'high', 'mild', 'moderate'];
        if (!in_array($level, $allowed)) {
            return response()->json(['message' => 'Invalid sevierity level.'], 400);
        }

       $clients = Client::with(['consultant', 'classroom.school', 'specialty'])
    ->where('sevierity', $level)
    ->latest()
    ->get()
    ->map(function ($client) {
        return [
            'id' => $client->id,
            'name' => $client->name,
            'code' => $client->code,
            'sevierity' => $client->sevierity,
            'class' => optional($client->classroom)->name,
            'school' => optional($client->classroom->school)->name, // Get school name from classroom relation
            'consultant' => optional($client->consultant)->name,
            'specialty' => optional($client->specialty)->name,
            
        ];
    });

return response()->json(['data' => $clients]);
    }


    // GET /api/clients/filter/followup-status?status=in_progress&manager_id=1
public function filterByFollowupStatus(Request $request)
{
    $status = $request->query('status');
    $managerId = $request->query('manager_id');

    if (!$status || !$managerId) {
        return response()->json([
            'message' => 'Both follow-up status and manager_id are required.'
        ], 400);
    }

    $clients = Client::with(['consultant', 'classroom'])
        ->where('followup_status', $status)
        ->whereHas('classroom', function ($q) use ($managerId) {
            $q->where('manager_id', $managerId);
        })
        ->get()
        ->map(function ($client) {
            return [
                'name' => $client->name,
                'code' => $client->code,
                'class' => optional($client->classroom)->name,
                'consultant' => optional($client->consultant)->name,
            ];
        });

    return response()->json(['data' => $clients]);
}

// GET /api/clients/followup/completed?manager_id=1
public function completedFollowupsByManager(Request $request)
{
    $managerId = $request->query('manager_id');

    if (!$managerId) {
        return response()->json([
            'message' => 'manager_id is required.'
        ], 400);
    }

    $clients = Client::with(['consultant', 'classroom', 'followUps' => function ($query) {
            $query->latest()->limit(1); // Fetch most recent follow-up
        }])
        ->where('followup_status', 'completed')
        ->whereHas('classroom', function ($q) use ($managerId) {
            $q->where('manager_id', $managerId);
        })
        ->get()
        ->map(function ($client) {
            $latestFollowup = $client->followUps->first();

            return [
                'id' => $client->id,
                'name' => $client->name,
                'completion_date' => optional($latestFollowup)->completion_date,
                'summary' => optional($latestFollowup)->summary,
                'final_outcome' => optional($latestFollowup)->final_outcome,
            ];
        });

    return response()->json(['data' => $clients]);
}


}

















 