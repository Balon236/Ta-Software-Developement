<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class ConsultantController extends Controller
{
    // Get all consultants
    public function index()
    {
        $consultants = User::where('role', 'consultant')
            ->select('id', 'name', 'contact', 'role', 'gender')
            ->get();

        return response()->json($consultants);
    }

    // Delete a consultant
    public function destroy($id)
    {
        $consultant = User::where('role', 'consultant')->find($id);

        if (!$consultant) {
            return response()->json(['message' => 'Consultant not found'], 404);
        }

        $consultant->delete();
        return response()->json(['message' => 'Consultant deleted successfully']);
    }

    // Search consultants by name or contact
    public function search(Request $request)
    {
        $query = $request->input('query');

        $consultants = User::where('role', 'consultant')
            ->where(function ($q) use ($query) {
                $q->where('name', 'like', '%' . $query . '%')
                  ->orWhere('contact', 'like', '%' . $query . '%');
            })
            ->select('id', 'name', 'contact', 'role', 'gender')
            ->get();

        return response()->json($consultants);
    }

    // Edit consultant details
    public function update(Request $request, $id)
    {
        $consultant = User::where('role', 'consultant')->find($id);

        if (!$consultant) {
            return response()->json(['message' => 'Consultant not found'], 404);
        }

        $validated = $request->validate([
            'name'    => 'sometimes|string|max:255',
            'contact' => 'sometimes|string|max:255',
            'gender'  => 'sometimes|in:male,female,other',
        ]);

        $consultant->update($validated);

        return response()->json(['message' => 'Consultant updated successfully', 'data' => $consultant]);
    }
}
