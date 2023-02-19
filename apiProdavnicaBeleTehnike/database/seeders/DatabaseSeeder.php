<?php

namespace Database\Seeders;

use App\Models\Brend;
use App\Models\Kategorija;
use App\Models\Proizvod;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        Proizvod::truncate();
        Brend::truncate();
        Kategorija::truncate();

        User::create([
            'name' => 'djole', 
            'email' => 'djole@gmail.com',                
            'password' => Hash::make('djole')
        ]);
        User::create([
            'name' => 'radovan', 
            'email' => 'radovan@gmail.com',                    
            'password' => Hash::make('radovan'),
            'admin'=>1
        ]);

                (new BrendSeeder())->run();
                (new KategorijaSeeder())->run();
                (new ProizvodSeeder())->run();
    }
}
