<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Services\TipoTramiteDocumentoService;
use App\Models\TipoTramiteDocumento;

class DocumentosNecesariosSegunTipoTramite implements Rule {
    
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public $tipoTramiteId;

    public function __construct($tipoTramiteId) {
        $this->tipoTramiteId = $tipoTramiteId;
    }

    public function passes($attribute, $value) {
        return TipoTramiteDocumentoService::cantidadDeApariciones($this->tipoTramiteId) == count($value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message() {
        return 'La cantidad de tipo de documentos no coincide con la cantidad aceptada por el tipo de tramite';
    }
}
