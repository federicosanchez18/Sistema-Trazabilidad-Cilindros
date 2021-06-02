<?php

namespace App\Http\Middleware;

use Illuminate\Http\JsonResponse;
use Carbon\Carbon;
use Closure;

class ApiResponse {
    
    public function handle($request, Closure $next) {
        $response = $next($request);
        if($response->headers->get('content-type') == 'application/json' && $response instanceof JsonResponse) {
            $status = $response->status();

            $response->setData([
                'success' => substr($status, 0, 1) == '2',
                'time' => [
                    'date' => Carbon::now()->setTimezone(config('app.timezone'))->toDateTimeString(),
                    'tz' => config('app.timezone')
                ],
                'data' => $response->getData()
            ]);
        }

        return $response;
    }
}