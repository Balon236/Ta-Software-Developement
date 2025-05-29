<?php

namespace App\Http\Controllers\Api\Referral;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Referral;
use App\Models\Client;
use App\Models\User;
use App\Models\School;

class ReferralController extends Controller
{
    /**
     * List referrals.
     * - If manager_id == 1 (admin), return all.
     * - Else, return referrals for schools managed by that manager.
     * - Supports optional name search.
     */
    public function index(Request $request)
    {
        $managerId = $request->input('manager_id');
        $search = $request->input('search');

        $referrals = Referral::with(['client.school', 'client.classroom', 'client.consultant']);

        if ($managerId != 1) {
            // Limit referrals to schools managed by this manager
            $referrals->whereHas('client.classroom', function ($query) use ($managerId) {
    $query->where('manager_id', $managerId);
});

        }

        // If search is provided, filter by client name
        if (!empty($search)) {
            $referrals->whereHas('client', function ($query) use ($search) {
                $query->where('name', 'LIKE', '%' . $search . '%');
            });
        }

        $referrals = $referrals->latest()->get();

        $data = $referrals->map(function ($referral) {
            return [
                'referral_id' => $referral->id,
                'date_of_referral' => $referral->date_of_referral,
                'client_name' => optional($referral->client)->name,
                'client_id' => optional($referral->client)->id,
                'school' => optional($referral->client->school)->name,
                'class' => optional($referral->client->classroom)->name,
                'consultant_name' => optional($referral->client->consultant)->name,
            ];
        });

        return response()->json([
            'data' => $data
        ]);
    }

    /**
     * Add a new referral and assign a consultant.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'client_id' => 'required|exists:clients,id',
            'consultant_id' => 'required|exists:users,id',
        ]);

        // Update client with consultant_id and mark as referred
        $client = Client::findOrFail($validated['client_id']);
        $client->consultant_id = $validated['consultant_id'];
        $client->is_referred = 'yes';
        $client->save();

        // Create referral
        $referral = Referral::create([
            'client_id' => $validated['client_id'],
            'date_of_referral' => now(),
        ]);

        return response()->json([
            'message' => 'Referral created, consultant assigned, and client marked as referred.',
            'data' => $referral
        ], 201);
    }

    /**
     * Delete a referral and mark client as not referred.
     */
    public function destroy($id)
    {
        $referral = Referral::findOrFail($id);

        if ($referral->client) {
            $referral->client->is_referred = 'no';
            $referral->client->save();
        }

        $referral->delete();

        return response()->json([
            'message' => 'Referral deleted successfully and client marked as not referred.'
        ]);
    }
}
