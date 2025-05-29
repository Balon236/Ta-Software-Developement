<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\TaskReminder;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ReminderController extends Controller
{
    // View all reminders with task info
   public function index(Request $request)
{
    $managerId = $request->query('manager_id');

    $reminders = TaskReminder::with(['task:id,name,type,manager_id', 'followup.client:id,name,classroom_id'])
        ->get()
        ->filter(function ($reminder) use ($managerId) {
            if ($reminder->type === 'task') {
                // Only include tasks assigned to this manager
                return $reminder->task && $reminder->task->manager_id == $managerId;
            }

            if ($reminder->type === 'followup') {
                // Only include followups where the client's class is managed by this manager
                $client = optional($reminder->followup)->client;
                return $client && $client->classroom && $client->classroom->manager_id == $managerId;
            }

            return false;
        })
        ->map(function ($reminder) {
            $isFollowUp = $reminder->type === 'followup';

            return [
                'type' => $reminder->type,
                'name' => $isFollowUp
                    ? optional($reminder->followup->client)->name
                    : optional($reminder->task)->name,
                'priority' => $reminder->priority,
                'status' => $reminder->status,
                'due_date' => $reminder->due_date,
            ];
        })
        ->values(); // Reindex the collection

    return response()->json($reminders);
}



    // Create reminder
    public function store(Request $request)
    {
        $request->validate([
            'task_id' => 'required|exists:tasks,id',
            'due_date' => 'required|date',
            'priority' => 'required|in:low,medium,high',
           
        ]);

        $reminder = TaskReminder::create([
            'task_id' => $request->task_id,
            'due_date' => $request->due_date,
            'priority' => $request->priority,
            
        ]);

        return response()->json(['message' => 'Reminder created successfully', 'data' => $reminder]);
    }

    // Delete reminder
    public function destroy($id)
    {
        $reminder = TaskReminder::findOrFail($id);
        $reminder->delete();

        return response()->json(['message' => 'Reminder deleted']);
    }

    // Get reminders not completed
    public function notCompleted()
    {
        $reminders = TaskReminder::with('task')
            ->whereNotIn('status', ['completed'])
            ->get();

        return response()->json($reminders);
    }

    // Get completed reminders
    public function completed()
    {
        $reminders = TaskReminder::with('task')
            ->where('status', 'completed')
            ->get();

        return response()->json($reminders);
    }

    // Get fast-approaching (due in next 1–2 days)
    public function fastApproaching()
    {
        $today = Carbon::today();
        $inTwoDays = $today->copy()->addDays(2);

        $reminders = TaskReminder::with('task')
            ->whereBetween('due_date', [$today, $inTwoDays])
            ->whereNotIn('status', ['completed'])
            ->get();

        return response()->json($reminders);
    }
//today agenda
   public function dueToday()
{
    $today = Carbon::today();

    $reminders = TaskReminder::with(['task', 'followup.client'])
        ->whereDate('due_date', $today)
        ->get()
        ->map(function ($reminder) {
            if ($reminder->type === 'followup') {
                return [
                    'id' => $reminder->id,
                    'type' => $reminder->type,
                    'topic' => $reminder->followup?->client?->name ?? 'Unknown Client',
                    'description' => null,
                    'duration' => null,
                ];
            }

            return [
                'id' => $reminder->id,
                'type' => $reminder->type,
                'topic' => $reminder->task?->name ?? 'Unknown Task',
                'description' => $reminder->task?->description,
                'duration' => $reminder->task?->duration ?? 'N/A',
            ];
        });

    return response()->json($reminders);
}


     //  Mark a task as completed
    public function markAsDone(Request $request)
{
    $tasks = $request->input('tasks');

    foreach ($tasks as $taskData) {
        $reminder = TaskReminder::with('followup.client')->find($taskData['id']);

        if (!$reminder) {
            continue; // Skip if not found
        }

        if ($reminder->type === 'followup' && $reminder->followup && $reminder->followup->client) {
            // Update the client's followup_status
            $reminder->followup->client->update(['followup_status' => 'completed']);
        }

        // Update the reminder's status to 'done'
        $reminder->update(['status' => 'done']);
    }

    return response()->json(['message' => 'Tasks marked as done']);
}

//filterReminder by priority
public function filterByPriority($level)
{
    $allowedLevels = ['low', 'medium', 'high'];

    if (!in_array(strtolower($level), $allowedLevels)) {
        return response()->json(['error' => 'Invalid priority level. Must be low, medium, or high.'], 400);
    }

    $reminders = TaskReminder::where('priority', strtolower($level))->get();

    return response()->json($reminders);
}

}


