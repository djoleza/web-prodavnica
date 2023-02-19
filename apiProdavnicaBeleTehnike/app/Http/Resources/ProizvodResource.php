<?php

namespace App\Http\Resources;

use App\Models\Brend;
use App\Models\Kategorija;
use Illuminate\Http\Resources\Json\JsonResource;

class ProizvodResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'naziv' => $this->naziv,
            'opis' => $this->opis,
            'cena' => $this->cena,
            'slika_url' => $this->slika_url,
            'kategorija' =>  Kategorija::find($this->kategorija_id),
            'brend' => Brend::find($this->brend_id),           
            'stanje_na_lageru' => $this->stanje_na_lageru,
 
        ];
    }
}
