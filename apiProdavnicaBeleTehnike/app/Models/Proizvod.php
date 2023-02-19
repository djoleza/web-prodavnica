<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proizvod extends Model
{
    use HasFactory;
    protected $fillable = [
        'naziv',
        'opis',
        'cena',
        'slika_url',
        'kategorija_id',
        'brend_id',
        'istaknut',
        'stanje_na_lageru',
    ];

    public function kategorija()
    {
        return $this->belongsTo(Kategorija::class);
    }

    public function brend()
    {
        return $this->belongsTo(Brend::class);
    }
}
