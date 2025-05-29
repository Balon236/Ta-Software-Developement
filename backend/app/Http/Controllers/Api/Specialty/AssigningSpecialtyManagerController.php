<?php

namespace App\Http\Controllers\Api\Specialty;

use App\Http\Controllers\Controller;
use App\Models\Specialty;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AssigningSpecialtyManagerController extends Controller
{
    /**
     * Handle the request to assign a manager to a specialty.
     */
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'specialty_id' => 'required|exists:specialties,id',
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

        $specialty = Specialty::find($request->specialty_id);
        $specialty->manager_id = $manager->id;
        $specialty->save();

        return response()->json([
            'status' => true,
            'message' => 'Manager assigned to specialty successfully.',
            'data' => [
                'specialty_id' => $specialty->id,
                'specialty_name' => $specialty->name,
                'manager_name' => $manager->name,
            ],
        ]);
    }
}
