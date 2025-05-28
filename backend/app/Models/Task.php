<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Client;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'explanation', 'isassign',
        'manager_id', 'status', 'type', 'client_id',
        'start_date', 'due_date', 'priority', 'time_estimate', 'assignees'
    ];

    /**
     * Manager who is assigned the task.
     */
    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    /**
     * Client related to the task.
     */
    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id');
    }
}
