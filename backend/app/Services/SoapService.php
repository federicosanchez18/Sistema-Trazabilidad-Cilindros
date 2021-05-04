<?php

namespace App\Services;

use App\Models\SoapClient\Establecimiento;
use SoapClient;

class SoapService {

	public function obtenerEstablecimiento($idEstablecimiento) {
        $params = [
			'Idestablecimiento' => $idEstablecimiento,
            'Usuario' => config('soap.auth.user'),
            'Password' => config('soap.auth.password')
        ];
        $soapClient = new SoapClient(config('soap.client_paths.wsdl'));
        $soapResponse = $soapClient->__soapCall('datos_establecimiento', $params);
        $establecimientoEnJson = json_decode(json_encode($soapResponse), true);
        $establecimiento = new Establecimiento($establecimientoEnJson);
        
        return $establecimiento;
	}
}