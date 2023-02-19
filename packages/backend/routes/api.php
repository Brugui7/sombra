<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LogController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\SensorController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ElementController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('elements')->controller(ElementController::class)->group(function () {
    Route::get('', 'get');
    Route::post('', 'store');
    Route::put('/{id}', 'update');
    Route::get('/{id}', 'getById');
    Route::get('/{id}/logs', 'getElementLogs');
    Route::get('/{id}/sensors', 'getElementSensors');
});

Route::prefix('sensors')->controller(SensorController::class)->group(function () {
    Route::get('', 'get');
    Route::post('', 'store');
    Route::delete('/{id}', 'destroy');
});

Route::get('/roles', [RoleController::class, 'index']);
Route::get('/users/{id}/role', [UserController::class, 'getRole']);

Route::prefix('logs')->controller(LogController::class)->group(function () {
    Route::post('', 'store');
    // Just for testing purposes
    Route::get('', 'index');
});

Route::prefix('auth')->controller(AuthController::class)->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/logout', [AuthController::class, 'logOut']);
});



