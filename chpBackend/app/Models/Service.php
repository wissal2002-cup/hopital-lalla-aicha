<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable=['title'];
    use HasFactory;


     public function contents()
    {
        return $this->hasMany(ServiceContent::class);
    }

    public function images()
    {
        return $this->hasMany(ServiceImage::class);
    }
}
