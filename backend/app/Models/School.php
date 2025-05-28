<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'region_id',
    ];

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function classrooms()
    {
        return $this->hasMany(Classroom::class);
    }

    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
