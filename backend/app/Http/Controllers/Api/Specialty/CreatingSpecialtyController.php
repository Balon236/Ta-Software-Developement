<?php

namespace App\Http\Controllers\Api\Specialty;

use App\Http\Controllers\Controller;
use App\Models\Specialty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CreatingSpecialtyController extends Controller
{
    /**
     * Handle the request to create a new specialty.
     */
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'classroom_id' => 'required|exists:classrooms,id',
            'name' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $specialty = Specialty::create([
            'classroom_id' => $request->classroom_id,
            'name' => $request->name,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Specialty created successfully.',
            'data' => $specialty,
        ], 201);
    }
}
