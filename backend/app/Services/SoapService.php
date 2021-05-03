<?php

namespace App\Services;

use App\Models\SoapClient\Establishment;
use SoapClient;

class SoapService {

	public static function getEstablishment($idEstablishment) {
        $params = [
			'Idestablecimiento' => $idEstablishment,
            'Usuario' => config('soap.auth.user'),
            'Password' => config('soap.auth.password')
        ];
        $soapClient = new SoapClient(config('soap.client_paths.wsdl'));
        $soapResponse = $soapClient->__soapCall('datos_establecimiento', $params);
        $establishmentJson = json_decode(json_encode($soapResponse), true);
        $establishment = new Establishment($establishmentJson);
        
        return $establishment;
	}
}