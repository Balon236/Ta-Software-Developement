<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'school_id',
        'classroom_id',
        'specialty_id',
        'gender',
        'dob',
        'contact',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }



    
    // ================= Relationships ================= //

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

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }

    public function leaveRequests()
    {
        return $this->hasMany(LeaveRequest::class);
    }

    public function classrooms()
{
    return $this->hasMany(Classroom::class, 'manager_id');
}

public function specialties()
{
    return $this->hasMany(Specialty::class, 'manager_id');
}


    public function reports()
    {
        return $this->hasMany(Report::class);
    }

    public function activityLog()
    {
        return $this->hasOne(ActivityLog::class);
    }

    // ================= Role Checkers ================= //

    public function isAdmin(): bool
    {
        return $this->role === 'admin';
    }

    public function isManager(): bool
    {
        return $this->role === 'manager';
    }

    public function isCaseManager(): bool
    {
        return $this->role === 'case_manager';
    }

    public function isClient(): bool
    {
        return $this->role === 'client';
    }
}
