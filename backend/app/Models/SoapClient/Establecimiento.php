<?php

namespace App\Models\SoapClient;

class Establecimiento {

    public $id;
    public $razon_social; 
    public $cuit; 
    public $planta;
    public $partido; 
    public $localidad;
    public $domicilio;

    public function __construct($establecimientoEnJson) {
        $this->id = $establecimientoEnJson['idestablecimiento'];
        $this->razon_social = $establecimientoEnJson['razonsocial'];
        $this->cuit = $establecimientoEnJson['cuit'];
        $this->planta = $establecimientoEnJson['planta'];
        $this->partido = $establecimientoEnJson['partido'];
        $this->localidad = $establecimientoEnJson['localidad'];
        $this->domicilio = $establecimientoEnJson['domicilio'];
    }

}