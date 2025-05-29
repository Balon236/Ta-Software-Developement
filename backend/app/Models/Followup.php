<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Followup extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'followup_status',
        'priority',
        'description',
        'start_date',
        'due_date',
        'assignees',
        'time_estimate',
        'summary',
        'completion_date',
    ];

    public function client()
{
    return $this->belongsTo(Client::class, 'client_id'); // adjust foreign key if needed
}


    // app/Models/FollowUp.php

public function taskReminders()
{
    return $this->hasMany(TaskReminder::class, 'followup_id');
}

}
