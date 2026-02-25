<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

    

class Admin extends Authenticatable
{
    protected $fillable=['name','email','password'];
    use HasFactory;
    use HasApiTokens;

}
