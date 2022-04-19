<?php

namespace App\Http\Controllers;

use App\Http\Resources\ElementResource;
use App\Models\Element;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ElementController extends Controller
{
    public function get(Request $request): AnonymousResourceCollection
    {
        return ElementResource::collection(Element::paginate());
    }
}
