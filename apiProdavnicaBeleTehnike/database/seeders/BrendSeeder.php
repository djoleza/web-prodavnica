<?php

namespace Database\Seeders;

use App\Models\Brend;
use Illuminate\Database\Seeder;

class BrendSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $brendovi = [
            [
                'naziv' => 'Samsung',
                'opis' => 'Južnokorejska kompanija koja se bavi proizvodnjom elektronike i softvera',
                'logo_url' => 'https://www.samsung.com/etc/designs/smg/global/imgs/logo-square-letter.png',
                'slug' => 'samsung',
            ],
            [
                'naziv' => 'LG',
                'opis' => 'Južnokorejska kompanija koja se bavi proizvodnjom elektronike i kućnih aparata',
                'logo_url' => 'https://www.lg.com/au/images/lg-logo.png',
                'slug' => 'lg',
            ],
            [
                'naziv' => 'Bosch',
                'opis' => 'Nemačka kompanija koja se bavi proizvodnjom kućnih aparata i alata',
                'logo_url' => 'https://www.bosch.de/media/de/de/boschglobal/bosch-logo.png',
                'slug' => 'bosch',
            ],
            [
                'naziv' => 'Whirlpool',
                'opis' => 'Američka kompanija koja se bavi proizvodnjom kućnih aparata',
                'logo_url' => 'https://www.whirlpool.com/etc/designs/whirlpool/clientlibs/clientlib-base/images/whirlpool-logo.png',
                'slug' => 'whirlpool',
            ],
            [
                'naziv' => 'Siemens',
                'opis' => 'Nemačka kompanija koja se bavi proizvodnjom kućnih aparata i energetskim sistemima',
                'logo_url' => 'https://www.siemens.com/etc/designs/siemens/clientlibs/clientlib-base/resources/images/siemens-logo.svg',
                'slug' => 'siemens',
            ],
        ];

        foreach ($brendovi as $brend) {
            Brend::create($brend);
        }
    }
}
