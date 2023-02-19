<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brend extends Model
{
    use HasFactory;
    protected $fillable = [
        'naziv',
        'opis',
        'logo_url',
        'slug',
    ];

    public function proizvodi()
    {
        return $this->hasMany(Proizvod::class);
    }
}
