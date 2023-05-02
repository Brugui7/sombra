<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SensorTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (DB::table('sensor_types')->get()->count() === 0) {
            DB::table('sensor_types')->insert([
                'name' => 'Temperature',
                'code' => 'temperature'
            ]);
            DB::table('sensor_types')->insert([
                'name' => 'Humidity',
                'code' => 'humidity'
            ]);
            DB::table('sensor_types')->insert([
                'name' => 'Position',
                'code' => 'position'
            ]);
        }
    }
}
