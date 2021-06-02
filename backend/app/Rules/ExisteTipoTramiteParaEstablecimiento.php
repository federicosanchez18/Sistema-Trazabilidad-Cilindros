<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\Tramite;

class ExisteTipoTramiteParaEstablecimiento implements Rule {
    
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public $establecimientoId;

    public function __construct($establecimientoId) {
        $this->establecimientoId = $establecimientoId;
    }

    public function passes($attribute, $value) {
        return !Tramite::existeTramite($value, $this->establecimientoId);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message() {
        return 'Ya existe un tramite con el tipo de tramite asociado al establecimiento actual';
    }
}
