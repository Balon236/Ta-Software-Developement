<?php

namespace App\Http\Controllers\Api\School;

use App\Http\Controllers\Controller;
use App\Models\School;
use Illuminate\Http\Request;

class SchoolController extends Controller
{
    /**
     * Return all schools with their ID and name.
     */
    public function index()
    {
        $schools = School::select('id', 'name')->get();

        return response()->json([
            'status' => true,
            'data' => $schools
        ]);
    }
}
