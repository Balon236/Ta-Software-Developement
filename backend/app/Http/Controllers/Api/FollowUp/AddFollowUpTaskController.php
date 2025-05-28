<?php

namespace App\Http\Controllers\API\FollowUp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\Client;
use App\Models\Referral;
use Illuminate\Support\Facades\Validator;

class AddFollowUpTaskController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'manager_id' => 'required|exists:users,id',
            'client_id' => 'required|exists:clients,id',
            'start_date' => 'required|date',
            'due_date' => 'required|date|after_or_equal:start_date',
            'status' => 'required|in:pending,in progress,completed',
            'priority' => 'required|in:low,medium,high',
            'time_estimate' => 'required|string',
            'assignees' => 'nullable|string',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Insert the follow-up task
        $task = Task::create([
            'manager_id' => $request->manager_id,
            'client_id' => $request->client_id,
            'type' => 'followup',
            'status' => $request->status,
            'priority' => $request->priority,
            'start_date' => $request->start_date,
            'due_date' => $request->due_date,
            'time_estimate' => $request->time_estimate,
            'assignees' => $request->assignees,
            'description' => $request->description,
            'name' => 'Follow-up Task',
            'explanation' => 'Auto-generated follow-up task'
        ]);

        // Update the client's follow_up_status
        $client = referral::find($request->client_id);
        $client->follow_up_status = 'in_progress';
        $client->save();

        return response()->json([
            'message' => 'Follow-up task created and client follow-up status updated.',
            'task' => $task
        ]);
    }
}
