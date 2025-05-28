<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\House;

class HouseController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'location' => 'required|string',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
        ]);

        $house = House::create($validated);

        return response()->json([
            'message' => 'House added successfully!',
            'house' => $house
        ], 201);
    }
}
