<?php

namespace App\Http\Controllers;

use App\Models\Element;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\log;
use JSONException;

class LogController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Log::paginate());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLogsBySensorId()
    {
        return Log::all();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getLogsByElementId(Request $request, $elementId)
    {
        return Log::all();
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request) {

        $data = $request->validate([
            'sensors' => 'required|array',
            'element_id' => 'required|numeric|integer'
        ]);

        try {
            $sensors = json_encode($data['sensors'], JSON_THROW_ON_ERROR);
            $element = Element::find($data['element_id']);
            $element->logs()->create([
                'data' => $sensors
            ]);
        } catch (JSONException $e) {
            return $this->sendJsonResponse(false, 'Sensors JSON provided is not valid', null, 422);
        }

        return $this->sendJsonResponse(true, 'Data stored successfully', null, 201);

    }
}
