<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Presentation extends Model
{
protected $fillable = [
    'title',
    'content',
    'image',
];

    use HasFactory;
}

