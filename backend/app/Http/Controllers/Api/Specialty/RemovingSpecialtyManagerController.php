<?php

namespace App\Http\Controllers\Api\Specialty;

use App\Http\Controllers\Controller;
use App\Models\Specialty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RemovingSpecialtyManagerController extends Controller
{
    /**
     * Handle the request to remove the manager from a specialty.
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

        $specialty = Specialty::find($request->specialty_id);

        if (!$specialty->manager_id) {
            return response()->json([
                'status' => false,
                'message' => 'This specialty does not have a manager assigned.',
            ], 404);
        }

        $specialty->manager_id = null;
        $specialty->save();

        return response()->json([
            'status' => true,
            'message' => 'Manager removed from specialty successfully.',
            'data' => [
                'specialty_id' => $specialty->id,
                'specialty_name' => $specialty->name,
            ],
        ]);
    }
}
