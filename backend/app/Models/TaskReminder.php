<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Task;

class TaskReminder extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id',
        
       'followup_id',
        'due_date',
         'type',
        'priority',
        'status',
    ];

    public function task()
    {
        return $this->belongsTo(Task::class);
    }
    // app/Models/TaskReminder.php

public function followup()
{
    return $this->belongsTo(FollowUp::class, 'followup_id');
}

}
