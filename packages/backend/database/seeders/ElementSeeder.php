<?php

namespace Database\Seeders;

use App\Models\Element;
use App\Models\User;
use Illuminate\Database\Seeder;

class ElementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Element::factory(10)->create();
    }
}
