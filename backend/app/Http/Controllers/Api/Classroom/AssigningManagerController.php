<?php

namespace App\Http\Controllers\Api\Classroom;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AssigningManagerController extends Controller
{
    /**
     * Handle the incoming request to assign a manager to a classroom.
     */
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'classroom_id' => 'required|exists:classrooms,id',
            'manager_id' => 'required|exists:users,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $manager = User::where('id', $request->manager_id)
            ->where('role', 'manager')
            ->first();

        if (!$manager) {
            return response()->json([
                'status' => false,
                'message' => 'Selected user is not a manager.',
            ], 422);
        }

        $classroom = Classroom::find($request->classroom_id);
        $classroom->manager_id = $manager->id;
        $classroom->save();

        return response()->json([
            'status' => true,
            'message' => 'Manager assigned to classroom successfully.',
            'data' => [
                'classroom_id' => $classroom->id,
                'classroom_name' => $classroom->name,
                'manager_name' => $manager->name,
            ],
        ], 200);
    }
}
