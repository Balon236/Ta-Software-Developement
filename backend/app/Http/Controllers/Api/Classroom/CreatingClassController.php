<?php

namespace App\Http\Controllers\Api\Classroom;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CreatingClassController extends Controller
{
    /**
     * Handle the incoming request to create a new class.
     */
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'school_id' => 'required|exists:schools,id',
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $classroom = Classroom::create([
            'school_id' => $request->school_id,
            'name' => $request->name,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Classroom created successfully.',
            'data' => $classroom,
        ], 201);
    }
}
