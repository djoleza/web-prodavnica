<?php

namespace Database\Seeders;

use App\Models\Brend;
use App\Models\Kategorija;
use App\Models\Proizvod;
use Illuminate\Database\Seeder;

class ProizvodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         

        $proizvod1 = new Proizvod();
        $proizvod1->naziv = "Beko RCNA406K20P";
        $proizvod1->opis = "Frižider sa zamrzivačem, A+ energetska klasa, zapremina 406 l";
        $proizvod1->cena = 79990;
        $proizvod1->slika_url = "https://www.beko.rs/~/media/Images/Product%20Images%20EU/Products%20Refrigerators/Combi%20Fridge%20Freezers/RCNA406K20P/RCNA406K20P-01.jpg";
        $proizvod1->kategorija_id = 1;
        $proizvod1->brend_id = 3;
 
        $proizvod1->stanje_na_lageru = 10;
        $proizvod1->save();


        $proizvod2 = new Proizvod();
        $proizvod2->naziv = "Bosch SMS24AW01Z";
        $proizvod2->opis = "Mašina za pranje sudova, A+ energetska klasa, 12 kompleta, 4 programa pranja";
        $proizvod2->cena = 36999;
        $proizvod2->slika_url = "https://www.bosch-home.com/rs/media/cache/placeholder_600x600/Productoverview_Placeholder_Silver-Line-NG_Dis_003-0025.jpg";
        $proizvod2->kategorija_id = 2;
        $proizvod2->brend_id = 1;
 
        $proizvod2->stanje_na_lageru = 5;
        $proizvod2->save();

        $proizvod3 = new Proizvod();
        $proizvod3->naziv = "Gorenje DU740E";
        $proizvod3->opis = "Ugradna rerna, A energetska klasa, zapremina 67 l, 9 funkcija pečenja";
        $proizvod3->cena = 35990;
        $proizvod3->slika_url = "https://media.linksynergy.com/images/250x250/Gorenje+DU740E+_8a88484b45d035aa35ca303b6ee1d16b.jpg";
        $proizvod3->kategorija_id = 3;
        $proizvod3->brend_id = 2;
 
        $proizvod3->stanje_na_lageru = 3;
        $proizvod3->save();


      Proizvod::create([
            'naziv' => 'Samsung veš mašina',
            'opis' => 'Veš mašina sa kapacitetom od 7kg, sa inovativnom tehnologijom pranja',
            'cena' => 29999,
            'slika_url' => 'https://www.samsung.com/rs/washing-machines/washer-ww70j524daw/LC49HG90DMUXEN-102794306/',
            'kategorija_id' => 2,
            'brend_id' => 3,
           
            'stanje_na_lageru' => 5,
        ]);
        Proizvod::create([
            'naziv' => 'Gorenje frižider',
            'opis' => 'Moderan frižider u elegantnom dizajnu, sa prostorom za hlađenje i zamrzavanje',
            'cena' => 31999,
            'slika_url' => 'https://www.gorenje.rs/fri%C5%BEideri_i_zamrziva%C4%8Di/fri%C5%BEideri/FN6192CW',
            'kategorija_id' => 1,
            'brend_id' => 4,
           'stanje_na_lageru' => 3,
        ]);

    }
}
