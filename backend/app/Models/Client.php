<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'sevierity',
        'consultant_id',
        'school_id',
        'classroom_id',
        'specialty_id',
        'followup_status',
        'age',
        'code',
        'classroom_id',
        'name',
    ];

    // Consultant (user who manages this client)
    public function consultant()
    {
        return $this->belongsTo(User::class, 'consultant_id');
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function classroom()
    {
        return $this->belongsTo(Classroom::class);
    }

    public function specialty()
    {
        return $this->belongsTo(Specialty::class);
    }

    public function responses()
    {
        return $this->hasMany(ScreeningResponse::class, 'screen_record_id');
    }

     public function followUps()
    {
        return $this->hasMany(FollowUp::class);
    }
}
