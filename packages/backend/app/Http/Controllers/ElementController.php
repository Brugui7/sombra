<?php

namespace App\Http\Controllers;

use App\Http\Resources\ElementResource;
use App\Models\Element;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Arr;

class ElementController extends Controller
{
    public function get(Request $request): AnonymousResourceCollection
    {
        return ElementResource::collection(Element::paginate());
    }

    public function getById(Request $request, $id)
    {
        $element = Element::find($id);

        if (!$element) {
            return response(null, 404);
        }

        return $this->sendJsonResponse(true, '', $element);
    }

    public function delete(Request $request, $id)
    {
        $element = Element::find($id);

        if (!$element) {
            return response(null, 404);
        }

        $element->delete();
        return $this->sendJsonResponse(true, 'Elemento borrado correctamente', null);
    }

    public function getElementLogs(Request $request, $id)
    {
        $element = Element::find($id);
        if (!$element) {
            return response(null, 404);
        }
        return $element->logs()->orderBy('created_at', 'desc')->paginate(100);
    }

    public function store(Request $request)
    {
        try {
            Element::create(
                $request->validate([
                    'name' => 'required|string',
                    'description' => 'required'
                ])
            );
            return $this->sendJsonResponse(true, 'Element created successfully', null, 201);
        } catch (\Exception $e) {
            return $this->sendJson500Response($e);
        }
    }

    public function update(Request $request, $id)
    {
        $element = Element::find($id);

        if (!$element) {
            return response(null, 404);
        }
        try {
            $element->update(
                $request->validate([
                    'name' => 'required|string',
                    'description' => 'required|string'
                ])
            );
            return $this->sendJsonResponse(true, 'Element updated successfully', null, 201);
        } catch (\Exception $e) {
            return $this->sendJson500Response($e);
        }
    }

    public function getElementSensors(Request $request, $id)
    {
        $element = Element::find($id);

        if (!$element) {
            return response(null, 404);
        }

        try {
            return $this->sendJsonResponse(
                true,
                'Sensors retrieved successfully',
                $element->sensors,
                201
            );
        } catch (\Exception $e) {
            return $this->sendJson500Response($e);
        }
    }


}
