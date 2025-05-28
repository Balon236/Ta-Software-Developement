<?php

namespace App\Http\Controllers\Api\FollowUp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FollowUp;
use App\Models\Client;
use App\Models\TaskReminder; // ✅ Import TaskReminder

class FollowUpController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'client_id' => 'required|exists:clients,id',
            'description' => 'nullable|string',
            'start_date' => 'required|date',
            'due_date' => 'required|date',
            'assignees' => 'nullable|string',
            'time_estimate' => 'nullable|string',
            'priority' => 'required|in:low,medium,high',
        ]);

        // Create the follow-up
        $followUp = FollowUp::create($validated);

        // Update the client's follow_upstatus
        Client::where('id', $validated['client_id'])->update([
            'followup_status' => 'in_progress'
        ]);

        // ✅ Create task reminder linked to this follow-up
        TaskReminder::create([
            'followup_id' => $followUp->id,
            'due_date' => $followUp->due_date,
            'type' => 'followup',
        ]);

        return response()->json([
            'message' => 'Follow-up created and task reminder added successfully.',
            'data' => $followUp
        ], 201);
    }

    public function filterByPriority($priority, Request $request)
    {
        $allowed = ['low', 'medium', 'high'];
        if (!in_array($priority, $allowed)) {
            return response()->json(['message' => 'Invalid priority level.'], 400);
        }

        $managerId = $request->query('manager_id');

        $followUps = FollowUp::with(['client.classroom', 'client.consultant'])
            ->where('priority', $priority)
            ->whereHas('client.classroom', function ($query) use ($managerId) {
                if ($managerId && $managerId !== '1') {
                    $query->where('manager_id', $managerId);
                }
            })
            ->latest()
            ->get();

        // Transform to return only selected client fields
        $result = $followUps->map(function ($followUp) {
            $client = $followUp->client;
            return [
                'client_name' => $client->name,
                'code' => $client->code,
                'class' => $client->classroom->name ?? null,
                'consultant' => $client->consultant->name ?? null,
            ];
        });

        return response()->json(['data' => $result]);
    }

    public function followupsByManager($managerId)
{
    // Get all followups for clients in classes managed by the given manager
    $followups = Followup::with('client') // Eager load client
        ->whereHas('client', function ($query) use ($managerId) {
            $query->where('followup_status', '!=', 'completed')
                  ->whereHas('classroom', function ($q) use ($managerId) {
                      $q->where('manager_id', $managerId);
                  });
        })
        ->latest() // Order by latest created_at
        ->get();

    return response()->json($followups);
}

}
