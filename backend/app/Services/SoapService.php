<?php

namespace App\Services;

use App\Models\SoapClient\Establecimiento;
use SoapClient;

class SoapService {

	private $soapClient;

	public function __construct() {
		$this->soapClient = new SoapClient(config('soap.client_paths.wsdl')); 
	}

	public function getEstablecimiento($idEstablecimiento) {
        $params = [
			'Idestablecimiento' => $idEstablecimiento,
            'Usuario' => config('soap.auth.user'),
            'Password' => config('soap.auth.password')
        ];
        $soapResponse = $this->soapClient->__soapCall('datos_establecimiento', $params);
        // Contemplar validaciones de los datos que llegan o si hay algun error.
        $soapResponseJson = $this->_parsearSoapResponseAJson($soapResponse);
        $establecimiento = new Establecimiento($soapResponseJson);
        
        return $establecimiento;
	}

	private function _parsearSoapResponseAJson($soapResponse) {
		return json_decode(json_encode($soapResponse), true);
	}
}