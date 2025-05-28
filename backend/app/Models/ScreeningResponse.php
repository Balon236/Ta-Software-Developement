<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ScreeningResponse extends Model
{
    use HasFactory;

    protected $fillable = [
        'screen_record_id',
        'question_id',
        'answer',
        'comment',
    ];

    public function screenRecord()
    {
        return $this->belongsTo(ScreenRecord::class);
    }

    public function question()
    {
        return $this->belongsTo(Question::class, 'question_number', 'number');
    }
}
