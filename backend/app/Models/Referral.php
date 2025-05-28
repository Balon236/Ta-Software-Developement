<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referral extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'date_of_referral',
        'follow_up_status', // pending, in_progress, completed
        'result',
        'action', // stable, no action needed, action needed
        'progress', // 0 to 100
    ];

    /**
     * The client this referral is for.
     */
    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
