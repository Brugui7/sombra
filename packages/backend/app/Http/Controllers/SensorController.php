<?php

namespace App\Http\Controllers;

use App\Models\Element;
use App\Models\Sensor;
use App\Http\Requests\StoreSensorRequest;
use App\Http\Requests\UpdateSensorRequest;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class SensorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function get()
    {
        return response()->json(Sensor::paginate());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreSensorRequest $request
     * @return JsonResponse
     */
    public function store(StoreSensorRequest $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'code' => 'required|string',
            'measure_unit' => 'required|string',
            'element_id' => 'required|numeric|integer'
        ]);

        try {
            $element = Element::find($data['element_id']);

            if (!$element) {
                return $this->sendJsonResponse(false, 'Could not find element with given id', null, 422);
            }

            $sensor = Sensor::create($data);

            return $this->sendJsonResponse(true, 'Sensor created successfully', $sensor, 201);
        } catch (\Exception $e) {
            return $this->sendJson500Response($e);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Sensor $sensor
     * @return \Illuminate\Http\Response
     */
    public function show(Sensor $sensor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Sensor $sensor
     * @return \Illuminate\Http\Response
     */
    public function edit(Sensor $sensor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateSensorRequest $request
     * @param \App\Models\Sensor $sensor
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSensorRequest $request, Sensor $sensor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param $id
     * @return JsonResponse
     */
    public function destroy(Request $request, $id)
    {
        try {
            $sensor = Sensor::find($id);

            if (!$sensor) {
                return $this->sendJsonResponse(false, '', null, 404);
            }

            $sensor->delete();

            return $this->sendJsonResponse(true, 'Sensor delete successfully', null);
        } catch (\Exception $e) {
            return $this->sendJson500Response($e);
        }
    }
}
