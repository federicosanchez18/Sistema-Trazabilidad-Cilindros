<?php

namespace App\Http\Controllers\SoapClient;

use App\Http\Controllers\Controller;
use App\Services\SoapService;
use Illuminate\Http\Request;

class SoapController extends Controller {

    public function __construct() {
        $this->soap_service = new SoapService;
    }
    
    /**
     * Get an establishment
     *
     * @return \Illuminate\Http\Response
     */
    public function getEstablecimiento(Request $request, $idEstablecimiento) {
        $response = $this->soap_service->getEstablecimiento($idEstablecimiento);

        return response()->json(['Establecimiento' => $response], 200);
    }
}
