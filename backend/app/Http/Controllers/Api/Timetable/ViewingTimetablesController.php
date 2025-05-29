<?php

namespace App\Http\Controllers\Api\Timetable;

use App\Http\Controllers\Controller;
use App\Models\Timetable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ViewingTimetablesController extends Controller
{
    /**
     * Handle the request to view timetables for a specialty.
     */
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'specialty_id' => 'required|exists:specialties,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $timetables = Timetable::where('specialty_id', $request->specialty_id)->get();

        $formatted = $timetables->map(function ($timetable) {
            return [
                'id' => $timetable->id,  
                'title' => $timetable->title,
                'date' => $timetable->date,
                'start_time' => $timetable->start_time,
                'end_time' => $timetable->end_time,
                'type' => $timetable->type,
                'description' => $timetable->description,
            ];
        });

        return response()->json([
            'status' => true,
            'data' => $formatted,
        ]);
    }
}
