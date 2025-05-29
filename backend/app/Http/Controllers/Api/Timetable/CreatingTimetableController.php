<?php

namespace App\Http\Controllers\Api\Timetable;

use App\Http\Controllers\Controller;
use App\Models\Timetable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CreatingTimetableController extends Controller
{
    /**
     * Handle the request to create a new timetable.
     */
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'specialty_id' => 'required|exists:specialties,id',
            'title' => 'required|string|max:255',
            'date' => 'required|date',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i',
            'type' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $timetable = Timetable::create([
            'specialty_id' => $request->specialty_id,
            'title' => $request->title,
            'date' => $request->date,
            'start_time' => $request->start_time,
            'end_time' => $request->end_time,
            'type' => $request->type,
            'description' => $request->description,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Timetable created successfully.',
            'data' => $timetable,
        ], 201);
    }
}
