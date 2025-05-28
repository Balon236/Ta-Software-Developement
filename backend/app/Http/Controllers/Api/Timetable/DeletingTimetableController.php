<?php

namespace App\Http\Controllers\Api\Timetable;

use App\Http\Controllers\Controller;
use App\Models\Timetable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DeletingTimetableController extends Controller
{
    /**
     * Handle the request to delete a timetable.
     */
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'timetable_id' => 'required|exists:timetables,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $timetable = Timetable::find($request->timetable_id);
        $timetable->delete();

        return response()->json([
            'status' => true,
            'message' => 'Timetable deleted successfully.',
        ]);
    }
}
