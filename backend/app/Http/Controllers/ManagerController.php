<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class ManagerController extends Controller
{
    public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'contact' => 'required|string|max:255',
        'gender' => ['required', Rule::in(['male', 'female'])],
        'dob' => 'required|date',
        'language' => ['required', Rule::in(['english', 'french'])],
        'marital_status' => ['required', Rule::in(['single', 'married'])],
        'whatsapp_number' => 'nullable|string|max:255',
        'location' => 'nullable|string|max:255',
        'role' => ['required', Rule::in(['admin', 'manager'])],
        'password' => 'required|string|min:6',
        'working_experience' => 'nullable|string|max:255',
    ]);

    $validated['password'] = Hash::make($validated['password']);

    $manager = User::create($validated);

    return response()->json([
        'message' => 'Manager created successfully',
        'data' => $manager,
    ], 201);
}

}
