<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Classroom;
use App\Models\Specialty;

class CaseManagerController extends Controller
{
    // View all case managers and their assignments
    public function index()
{
    $managers = User::wherein('role', ['case_manager', 'manager', 'client'])
        ->select('id', 'name', 'email', 'contact', 'gender', 'dob') 
        ->with([
            'classrooms:id,name,manager_id',
            'specialties:id,name,manager_id'
        ])
        ->get();

    return response()->json(['data' => $managers]);
}


    // Show a specific case manager and their assignments
    public function show($id)
    {
        $manager = User::where('role', 'case_manager')->with([
            'classrooms' => function ($query) {
                $query->select('id', 'name', 'manager_id');
            },
            'specialties' => function ($query) {
                $query->select('id', 'name', 'manager_id');
            }
        ])->findOrFail($id);

        return response()->json($manager);
    }

    // Update case manager info
    public function update(Request $request, $id)
    {
        $manager = User::findOrFail($id);

        $validated = $request->validate([
            'name' => 'sometimes|string',
            'email' => 'sometimes|email|unique:users,email,' . $id,
            'contact' => 'nullable|string',
            'dob' => 'nullable|date',
            'gender' => 'nullable|in:male,female,other',
        ]);

        $manager->update($validated);

        return response()->json(['message' => 'Case manager updated.', 'data' => $manager]);
    }

    // Delete case manager
    public function destroy($id)
    {
        $manager = User::findOrFail($id);

        // Optional: detach from related models
        Classroom::where('manager_id', $id)->update(['manager_id' => null]);
        Specialty::where('manager_id', $id)->update(['manager_id' => null]);

        $manager->delete();

        return response()->json(['message' => 'Case manager deleted.']);
    }
}
