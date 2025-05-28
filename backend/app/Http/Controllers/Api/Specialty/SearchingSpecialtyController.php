<?php

namespace App\Http\Controllers\Api\Specialty;

use App\Http\Controllers\Controller;
use App\Models\Specialty;
use Illuminate\Http\Request;

class SearchingSpecialtyController extends Controller
{
    /**
     * Handle the request to search specialties by name.
     */
    public function __invoke(Request $request)
    {
        $searchTerm = $request->input('query');

        $specialties = Specialty::with([
            'classroom.school.region.country',
            'manager',
        ])
        ->where('name', 'like', '%' . $searchTerm . '%')
        ->get();

        $formatted = $specialties->map(function ($specialty) {
            $classroom = $specialty->classroom;
            $school = $classroom?->school;
            $region = $school?->region;
            $country = $region?->country;

            return [
                'specialty_id' => $specialty->id,
                'specialty_name' => $specialty->name,
                'classroom_name' => $classroom?->name ?? 'No Classroom',
                'school_name' => $school?->name ?? 'No School',
                'country_name' => $country?->name ?? 'No Country',
                'manager_name' => $specialty->manager?->name ?? 'No Manager Assigned',
            ];
        });

        return response()->json([
            'status' => true,
            'data' => $formatted,
        ]);
    }
}
