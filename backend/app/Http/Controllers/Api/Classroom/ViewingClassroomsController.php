<?php

namespace App\Http\Controllers\Api\Classroom;

use App\Http\Controllers\Controller;
use App\Models\Classroom;
use Illuminate\Http\Request;

class ViewingClassroomsController extends Controller
{
    public function __invoke(Request $request)
    {
        $classrooms = Classroom::with([
            'school.region.country',
            'manager',
        ])->get();

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
}
