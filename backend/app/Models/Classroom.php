<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'school_id',
        'manager_id',
    ];

    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function specialties()
    {
        return $this->hasMany(Specialty::class);
    }

    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }
}
