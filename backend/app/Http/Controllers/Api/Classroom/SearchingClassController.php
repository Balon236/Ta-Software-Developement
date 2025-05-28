<?php

namespace App\Http\Controllers\Api\Classroom;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use Illuminate\Http\Request;

class SearchingClassController extends Controller
{
    // Existing __invoke method
    public function __invoke(Request $request)
    {
        $searchTerm = $request->input('query');

        $classrooms = Classroom::with([
            'school.region.country',
            'manager',
        ])
        ->where('name', 'like', '%' . $searchTerm . '%')
        ->get();

        $formatted = $classrooms->map(function ($classroom) {
            $school = $classroom->school;
            $region = $school?->region;
            $country = $region?->country;

            return [
                'class_id' => $classroom->id,
                'class_name' => $classroom->name,
                'school_name' => $school?->name ?? 'No School',
                'country_name' => $country?->name ?? 'No Country',
                'manager_name' => $classroom->manager?->name ?? 'No Manager Assigned',
            ];
        });

        return response()->json([
            'status' => true,
            'data' => $formatted,
        ]);
    }

    // method to get classes by school_id
   public function getClassesBySchool($school_id)
{
    if (!$school_id) {
        return response()->json([
            'status' => false,
            'message' => 'Missing school_id',
        ], 400);
    }

    $classes = Classroom::where('school_id', $school_id)
        ->select('id', 'name')
        ->orderBy('name')
        ->get();

    return response()->json([
        'status' => true,
        'data' => $classes,
    ]);
}

}
