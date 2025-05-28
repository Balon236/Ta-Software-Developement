<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'number',
        'question_text',
        'options',
        'category_id',
    ];

    protected $casts = [
        'options' => 'array', // Auto cast options field as array
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function responses()
    {
        return $this->hasMany(Response::class);
    }
}
