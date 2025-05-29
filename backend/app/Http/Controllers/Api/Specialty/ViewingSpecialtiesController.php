<?php

namespace App\Http\Controllers\Api\Specialty;

use App\Http\Controllers\Controller;
use App\Models\Specialty;
use Illuminate\Http\Request;

class ViewingSpecialtiesController extends Controller
{
    /**
     * Handle the request to view all specialties.
     */
    public function __invoke(Request $request)
    {
        $specialties = Specialty::with([
            'classroom.school.region.country',
            'manager',
        ])->get();

        $formatted = $specialties->map(function ($specialty) {
            $classroom = $specialty->classroom;
            $school = $classroom?->school;
            $region = $school?->region;
            $country = $region?->country;

            return [
                'specialty_id' => $specialty->id,
                'specialty_name' => $specialty->name,
                'location' => $specialty->location ?? 'Not available',
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
