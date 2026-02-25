<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnnonceDocument extends Model
{
    use HasFactory;
    public function annonce()
{
    return $this->belongsTo(Annonce::class);
}

protected $fillable = ['annonce_id', 'file_path', 'original_name'];

}
