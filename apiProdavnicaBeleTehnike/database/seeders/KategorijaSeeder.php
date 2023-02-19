<?php

namespace Database\Seeders;

use App\Models\Kategorija;
use Illuminate\Database\Seeder;

class KategorijaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $kategorije = [
            [
                'naziv' => 'Frižideri',
                'opis' => 'Kućni frižideri različitih veličina i tipova',
                'slug' => 'frizideri',
            ],
            [
                'naziv' => 'Veš mašine',
                'opis' => 'Različite vrste i veličine veš mašina',
                'slug' => 'ves-masine',
            ],
            [
                'naziv' => 'Mašine za sušenje veša',
                'opis' => 'Različite vrste i veličine mašina za sušenje veša',
                'slug' => 'masine-za-susenje-vesa',
            ],
            [
                'naziv' => 'Mašine za sudove',
                'opis' => 'Različite vrste i veličine mašina za pranje sudova',
                'slug' => 'masine-za-sudove',
            ],
            [
                'naziv' => 'Rerne',
                'opis' => 'Različite vrste i veličine rerne za pečenje hrane',
                'slug' => 'rerne',
            ],
        ];

        foreach ($kategorije as $kategorija) {
            Kategorija::create($kategorija);
        }
    }
}
