<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;
use App\Models\User;

class TaskController extends Controller
{
    // View all tasks
     public function index(Request $request)
{
    $managerId = $request->query('manager_id');

    if (!$managerId) {
        return response()->json(['message' => 'Manager ID is required.'], 400);
    }

    $tasks = Task::with('manager')
        ->where('manager_id', $managerId)
        ->get()
        ->map(function ($task) {
            return [
                'id'          => $task->id,
                'name'        => $task->name,
                'status'      => $task->status,
                'created_at'  => $task->created_at,
                'manager'     => $task->manager ? $task->manager->name : null,
            ];
        });

    return response()->json($tasks);
}


    // Assign a task
    public function assign(Request $request)
    {
        $request->validate([
            'task_id' => 'required|exists:tasks,id',
            'manager_id' => 'required|exists:users,id',
        ]);

        $manager = User::where('id', $request->manager_id)->where('role', 'manager')->first();
        if (!$manager) {
            return response()->json(['message' => 'Manager not found'], 404);
        }

        $task = Task::find($request->task_id);
        $task->is_assign = true;
        $task->manager_id = $request->manager_id;
        $task->save();

        return response()->json(['message' => 'Task assigned successfully']);
    }

    // Unassign a task
    public function unassign(Request $request)
    {
        $request->validate([
            'task_id' => 'required|exists:tasks,id',
        ]);

        $task = Task::find($request->task_id);
        $task->is_assign = false;
        $task->manager_id = null;
        $task->save();

        return response()->json(['message' => 'Task unassigned successfully']);
    }

    // Delete a task
    public function destroy($id)
    {
        $task = Task::find($id);
        if (!$task) {
            return response()->json(['message' => 'Task not found'], 404);
        }

        $task->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }


    
    // Store a new task
public function store(Request $request)
{
    $validated = $request->validate([
        'name'        => 'required|string|max:255',
        'description' => 'required|string',
        'explanation' => 'required|string',
    ]);

    $task = Task::create([
        'name'        => $validated['name'],
        'description' => $validated['description'],
        'explanation' => $validated['explanation'],
    ]);

    return response()->json([
        'message' => 'Task created successfully.',
        'task'    => $task
    ], 201);
}

    // View assigned tasks with status, creation date, and manager name
    public function assignedTasks()
    {
        $tasks = Task::with('manager')
            ->where('is_assign', true)
            ->get()
            ->map(function ($task) {
                return [
                    'name'        => $task->name,
                    'status'      => $task->status,
                    'created_at'  => $task->created_at,
                    'manager'     => $task->manager ? $task->manager->name : null,
                ];
            });

        return response()->json($tasks);
    }
}
