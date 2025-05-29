<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'classroom_id',
        'manager_id',
    ];

    public function classroom()
    {
        return $this->belongsTo(Classroom::class);
    }

    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    public function timetables()
    {
        return $this->hasMany(Timetable::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
