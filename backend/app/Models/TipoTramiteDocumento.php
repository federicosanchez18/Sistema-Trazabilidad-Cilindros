<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class TipoTramiteDocumento extends Pivot {

    protected $table = 'tipo_tramite_documentos';
}