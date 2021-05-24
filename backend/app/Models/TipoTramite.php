<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoTramite extends Model {
    
    use HasFactory;

    protected $casts = [
        'habilitado_gnc' => 'boolean'
    ];

    protected $with = ['tipoDocumentos'];

    # Querys
    # -----------------
    public static function getTipoTramite($nombreTipoTramite) {
        return self::where('nombre', $nombreTipoTramite)
                   ->first();
    }

	# Relationships
    # -----------------
	/**
     * Obtener todos los tipos de documentos del tipo de trámite actual.
     */
    public function tipoDocumentos(){
        return $this->belongsToMany(TipoDocumento::class, 'tipo_tramite_documentos', 'tipo_tramite_id', 'tipo_documento_id')
                    ->using(TipoTramiteDocumento::class);
    }

}