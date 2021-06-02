<?php

namespace App\Services;

use App\Models\Documento;

class DocumentoService {

	# Guarda todos los registros de un array de documentos pasado por parámetro
	# -------------------------
	public static function guardarRegistros($tipoDocumentoIds, $tramiteId, $tipoTramiteId, $establecimientoId) {
		foreach ($tipoDocumentoIds as $tipoDocumentoId) {
            $nuevoDocumento = Documento::create([
                'tramite_id' => $tramiteId,
                'nombre_archivo' => "{$tipoTramiteId}_{$tipoDocumentoId}_{$establecimientoId}.pdf", 
                'tipo_documento_id' => $tipoDocumentoId,
                'autorizado' => false
            ]);
        }

	}

}