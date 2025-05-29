<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Timetable extends Model
{
    use HasFactory;

    protected $fillable = [
        'specialty_id',
        'title',
        'date',
        'start_time',
        'end_time',
        'type',
        'description',
    ];

    public function specialty()
    {
        return $this->belongsTo(Specialty::class);
    }
}
