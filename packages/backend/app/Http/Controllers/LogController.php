<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\log;

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
}
