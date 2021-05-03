<?php

namespace App\Http\Controllers\SoapClient;

use App\Http\Controllers\Controller;
use App\Services\SoapService;
use Illuminate\Http\Request;

class SoapController extends Controller {
    
    /**
     * Get an establishment
     *
     * @return \Illuminate\Http\Response
     */
    public function getEstablishment(Request $request, $idEstablishment) {
        $response = SoapService::getEstablishment($idEstablishment);

        return response()->json(['Establishment' => $response], 200);
    }
}
