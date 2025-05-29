<?php

namespace App\Http\Controllers\API\Task;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\Client;
use App\Models\Referral;
use App\Models\TaskReminder;

class TaskController2 extends Controller
{
    //  Mark a task as completed
    public function markAsDone($id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json(['error' => 'Task not found'], 404);
        }

        $task->status = 'completed';
        $task->save();

        // If it's a followup task, update the client follow-up status
        if ($task->type === 'followup' && $task->client_id) {
            $client = Referral::find($task->client_id);
            if ($client) {
                $client->follow_up_status = 'completed';
                $client->save();
            }
        }

        return response()->json(['message' => 'Task marked as completed.']);
    }

    //  Filter tasks
    public function filter(Request $request)
    {
        $query = Task::query();

        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        if ($request->has('manager_id')) {
            $query->where('manager_id', $request->manager_id);
        }

        if ($request->has('priority')) {
            $query->where('priority', $request->priority);
        }

        $tasks = $query->get();

        return response()->json($tasks);
    }
}
