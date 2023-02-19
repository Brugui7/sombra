<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if (Auth::guard('sanctum')->check()) {
            return $this->sendJsonResponse(true, 'You are already logged in',  $request->bearerToken());
        }

        if (Auth::attempt($data)) {
            $token = Auth::user()->createToken("token")->plainTextToken;
            return $this->sendJsonResponse(true, 'Youve been logged in successfully',  $token);
        }

        return $this->sendJsonResponse(false, $request->name . ' doesn\'t exist or password is incorrect',  null, 401);
    }

    public function me(Request $request): JsonResponse
    {
        $user = Auth::guard('sanctum')->user();
        return $this->sendJsonResponse(true, '',  $user);
    }

    public function logOut(Request $request): JsonResponse
    {
        $user = Auth::guard('sanctum')->user();
        $user->tokens()->delete();
        return $this->sendJsonResponse(true, 'Logged out successfully', null);

    }
}
