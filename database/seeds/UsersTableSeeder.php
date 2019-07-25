<?php

/*
 * feat: style ci config
 */

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->fill([
            'name'              => 'Bagaskara Wisnu Gunawan',
            'email'             => 'me@bagaskarawg.id',
            'password'          => bcrypt('bagaskarawg'),
            'email_verified_at' => now(),
        ]);
        $user->save();
    }
}
