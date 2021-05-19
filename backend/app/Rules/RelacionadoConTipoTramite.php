<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Services\TipoTramiteDocumentoService;

class RelacionadoConTipoTramite implements Rule {
    
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
        return TipoTramiteDocumentoService::existeRelacionEntre($this->tipoTramiteId, $value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message() {
        return 'El tipo de documento actual no esta relacionado al tipo de tramite dado';
    }
}
