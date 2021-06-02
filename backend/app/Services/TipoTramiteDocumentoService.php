<?php

namespace App\Services;

use App\Models\TipoTramiteDocumento;

class TipoTramiteDocumentoService {

	# Chequea si existe la relación entre un determinado tipo de documento y un tipo de tramite
	# -------------------------
	public static function existeRelacionEntre($tipoTramiteId, $tipoDocumentoId) {
		return TipoTramiteDocumento::where('tipo_tramite_id', $tipoTramiteId)
                                   ->where('tipo_documento_id', $tipoDocumentoId)->exists();
	}

	# Obtiene la cantidad de documentos asociados al tramite pasado como parametro
	# -------------------------
	public static function cantidadDeApariciones($tipoTramiteId) {
		return TipoTramiteDocumento::where('tipo_tramite_id', $tipoTramiteId)->count();
	}

}