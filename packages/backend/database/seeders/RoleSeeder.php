<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (DB::table('roles')->get()->count() === 0) {
            DB::table('roles')->insert([
                'name' => 'Administrador',
            ]);
            DB::table('roles')->insert([
                'name' => 'Encargado',
            ]);
            DB::table('roles')->insert([
                'name' => 'Estándar',
            ]);
        }
    }
}
