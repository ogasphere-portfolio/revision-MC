<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('fr_FR');
        for ($i=0; $i < 30; $i++) {
            DB::table('users')->insert([
                'firstname' => $faker->firstName(),
                'lastname' => $faker->lastName(),
                'address' => $faker->address(),
                'active' => (bool) mt_rand(0, 1)
            ]);
        }
    }
}
