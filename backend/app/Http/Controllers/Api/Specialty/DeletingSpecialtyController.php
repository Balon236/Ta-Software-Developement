<?php

namespace App\Http\Controllers\Api\Specialty;

use App\Http\Controllers\Controller;
use App\Models\Specialty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DeletingSpecialtyController extends Controller
{
    /**
     * Handle the request to delete a specialty.
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
        $specialty->delete();

        return response()->json([
            'status' => true,
            'message' => 'Specialty deleted successfully.',
        ]);
    }
}
