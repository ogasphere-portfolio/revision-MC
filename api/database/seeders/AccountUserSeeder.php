<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class AccountUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // get all users
        $users = User::all();
        foreach ($users as $user) {
            $bool = (bool) mt_rand(0, 1);
            if($bool) {
                DB::table('account_user')->insert([
                    'user_id' => $user->id,
                    'account_id' => mt_rand(1, 3)
                ]);
            } else {
                DB::table('account_user')->insert([
                    [
                        'user_id' => $user->id,
                        'account_id' => mt_rand(1, 3)
                    ],
                    [
                        'user_id' => $user->id,
                        'account_id' => mt_rand(1, 3)
                    ]
                ]);
            }

        }
    }
}
