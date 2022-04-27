<?php

namespace App\Http\Controllers;

use App\Http\Resources\ElementResource;
use App\Models\Element;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UserController extends Controller
{
    public function getRole(Request $request, $id) {
        dd(User::find(5)->role);
        response(User::find(5));
    }
}
