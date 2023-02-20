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
        $proizvod1->slika_url = "https://yellshops.com/wp-content/uploads/2023/02/c17189aae42e7ee42de288f2f853b57582d1b777.jpeg ";
        $proizvod1->kategorija_id = 1;
        $proizvod1->brend_id = 3;
 
        $proizvod1->stanje_na_lageru = 10;
        $proizvod1->save();


        $proizvod2 = new Proizvod();
        $proizvod2->naziv = "Bosch SMS24AW01Z";
        $proizvod2->opis = "Mašina za pranje sudova, A+ energetska klasa, 12 kompleta, 4 programa pranja";
        $proizvod2->cena = 36999;
        $proizvod2->slika_url ="https://img.ep-cdn.com/i/500/500/af/afvyixqrnkgdswjzohlm/gorenje-gs541d10x-masina-za-pranje-sudova-cene.jpg";

        $proizvod2->kategorija_id = 2;
        $proizvod2->brend_id = 1;
 
        $proizvod2->stanje_na_lageru = 5;
        $proizvod2->save();

        $proizvod3 = new Proizvod();
        $proizvod3->naziv = "Gorenje DU740E";
        $proizvod3->opis = "Ugradna rerna, A energetska klasa, zapremina 67 l, 9 funkcija pečenja";
        $proizvod3->cena = 35990;
        $proizvod3->slika_url = "https://www.coolshop.rs/proizvodi/22195/beko-ugradna-rerna-bbim13400xs.jpg";
        $proizvod3->kategorija_id = 3;
        $proizvod3->brend_id = 2;
 
        $proizvod3->stanje_na_lageru = 3;
        $proizvod3->save();


      Proizvod::create([
            'naziv' => 'Samsung veš mašina',
            'opis' => 'Veš mašina sa kapacitetom od 7kg, sa inovativnom tehnologijom pranja',
            'cena' => 29999,
            'slika_url' => 'https://images.samsung.com/is/image/samsung/rs-washer-ww70k5410uw-ww70k5410uw-le-001-front',
            'kategorija_id' => 2,
            'brend_id' => 3,
           
            'stanje_na_lageru' => 5,
        ]);
        Proizvod::create([
            'naziv' => 'Gorenje frižider',
            'opis' => 'Moderan frižider u elegantnom dizajnu, sa prostorom za hlađenje i zamrzavanje',
            'cena' => 31999,
            'slika_url' =>  'https://epimage.s3.eu-central-1.amazonaws.com/images/tn/tnhxxiohnxlokckoueoa',
            'kategorija_id' => 2,

            'brend_id' => 4,
           'stanje_na_lageru' => 3,
        ]);

    }
}
