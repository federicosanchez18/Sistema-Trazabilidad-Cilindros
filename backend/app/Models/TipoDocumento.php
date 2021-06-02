<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoDocumento extends Model {
    
    use HasFactory;

    protected $hidden = ['pivot'];

	# Relationships
    # -----------------
	/**
     * Obtener todos los tipos de tramites del tipo de documento actual.
     */
    public function tipoTramites(){
        return $this->belongsToMany(TipoTramite::class, 'tipo_tramite_documentos', 'tipo_documento_id', 'tipo_tramite_id')
                    ->using(TipoTramiteDocumento::class);
    }

}