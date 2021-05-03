<?php

namespace App\Models\SoapClient;

class Establishment {

    public $businessName; 
    public $cuit; 
    public $plant;
    public $party; 
    public $location;
    public $address;
    public $idEstablishment;

    public function __construct($establishmentJson) {
        $this->businessName = $establishmentJson['razonsocial'];
        $this->cuit = $establishmentJson['cuit'];
        $this->plant = $establishmentJson['planta'];
        $this->party = $establishmentJson['partido'];
        $this->location = $establishmentJson['localidad'];
        $this->address = $establishmentJson['domicilio'];
        $this->idEstablishment = $establishmentJson['idestablecimiento'];
    }

}