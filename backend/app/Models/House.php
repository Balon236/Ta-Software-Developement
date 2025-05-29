<?php

namespace App\Models;



use Illuminate\Database\Eloquent\Model;

class House extends Model
{
    // This tells Laravel what fields can be filled automatically
    protected $fillable = ['name', 'location', 'price', 'description'];
}

