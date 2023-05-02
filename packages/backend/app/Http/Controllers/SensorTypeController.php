<?php

namespace App\Http\Controllers;

use App\Models\SensorType;
use Illuminate\Http\Request;

class SensorTypeController extends Controller
{
    public function index(Request $request)
    {
        return $this->sendJsonResponse(true, 'Sensor Types Obtained successfully', SensorType::all());
    }
}
