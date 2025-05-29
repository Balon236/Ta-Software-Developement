<?php

namespace App\Http\Controllers\Api\Classroom;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RemovingManagerController extends Controller
{
    /**
     * Handle the incoming request to remove a manager from a classroom.
     */
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'classroom_id' => 'required|exists:classrooms,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $classroom = Classroom::find($request->classroom_id);

        if (!$classroom->manager_id) {
            return response()->json([
                'status' => false,
                'message' => 'This classroom does not have a manager assigned.',
            ], 404);
        }

        $classroom->manager_id = null;
        $classroom->save();

        return response()->json([
            'status' => true,
            'message' => 'Manager removed from classroom successfully.',
            'data' => [
                'classroom_id' => $classroom->id,
                'classroom_name' => $classroom->name,
            ],
        ], 200);
    }
}
