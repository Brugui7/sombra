<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('logs')->insert([
            'data' => json_encode(json_decode('[
                            {
                                "sensor_type": "temp",
                                "sensor_code": "8EFA2E8B-6207-44F0-AE32-1BEC33D837DB",
                                "value": 43.5,
                                "datetime": 1661254076132
                            },
                            {
                                "sensor_type": "position",
                                "sensor_code": "4E4D3549-2E91-46F8-82D8-7E73D5C19252",
                                "value": 813,
                                "datetime": 1661254076632
                            }
                        ]', true), JSON_THROW_ON_ERROR),
            'element_id' => '1',
        ]);
        DB::table('logs')->insert([
            'data' => json_encode(json_decode('[
                            {
                                "sensor_type": "temp",
                                "sensor_code": "8EFA2E8B-6207-44F0-AE32-1BEC33D837DB",
                                "value": 7.5,
                                "datetime": 1661254077132
                            },
                            {
                                "sensor_type": "position",
                                "sensor_code": "4E4D3549-2E91-46F8-82D8-7E73D5C19252",
                                "value": 2,
                                "datetime": 1661254077632
                            }
                        ]', true), JSON_THROW_ON_ERROR),
            'element_id' => '1',
        ]);
        DB::table('logs')->insert([
            'data' => json_encode(json_decode('[
                            {
                                "sensor_type": "temp",
                                "sensor_code": "8EFA2E8B-6207-44F0-AE32-1BEC33D837DB",
                                "value": 240,
                                "datetime": 1661254078132
                            },
                            {
                                "sensor_type": "position",
                                "sensor_code": "4E4D3549-2E91-46F8-82D8-7E73D5C19252",
                                "value": 16,
                                "datetime": 1661254078632
                            }
                        ]', true, 512, JSON_THROW_ON_ERROR), JSON_THROW_ON_ERROR),
            'element_id' => '1',
        ]);
        DB::table('logs')->insert([
            'data' => json_encode(json_decode('[
                            {
                                "sensor_type": "temp",
                                "sensor_code": "8EFA2E8B-6207-44F0-AE32-1BEC33D837DB",
                                "value": 62,
                                "datetime": 1661254079132
                            },
                            {
                                "sensor_type": "position",
                                "sensor_code": "4E4D3549-2E91-46F8-82D8-7E73D5C19252",
                                "value": 107,
                                "datetime": 1661254079632
                            }
                        ]', true, 512, JSON_THROW_ON_ERROR), JSON_THROW_ON_ERROR),
            'element_id' => '1',
        ]);
    }
}
