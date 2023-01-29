<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function sendJsonResponse(bool $success, string $message, $data, int $status = 200): JsonResponse
    {
        return response()->json(
            [
                'success' => $success,
                'message' => $message,
                'data' => $data
            ],
            $status
        );
    }
}
