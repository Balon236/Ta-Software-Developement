<?php

namespace App\Http\Controllers\API\FollowUp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Referral;

class FilterFollowUpController extends Controller
{
    public function filter(Request $request)
    {
        $query = Referral::with(['client.consultant', 'client.classroom']);

        if ($request->has('follow_up_status')) {
            $query->where('follow_up_status', $request->follow_up_status);
        }

        if ($request->has('manager_id')) {
            $query->where('manager_id', $request->manager_id);
        }

        $results = $query->get()->map(function ($referral) {
            return [
                'id' => $referral->id,
                'follow_up_status' => $referral->follow_up_status,
                'student_name' => $referral->client?->name,
                'code' => $referral->client?->code,
                'class' => $referral->client?->classroom?->name,
                'consultant_name' => $referral->client?->consultant?->name,
                'screening_result_link' => $referral->screening_result_link,
                'consultant_result_link' => $referral->consultant_result_link,
            ];
        });

        return response()->json($results);
    }
}
