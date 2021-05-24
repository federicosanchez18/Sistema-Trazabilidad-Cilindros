<?php

namespace App\Services;

use App\Models\{TipoTramite, Tramite};

class TipoTramiteService {

	# Obtiene el Tramite con sus documentos si existe, 
	# sino retorna un tipo de tramite con sus requeridos tipo de documento a cargar
	# -------------------------
	public static function getTipoTramiteOTramite($params) {
        $tipoTramite = TipoTramite::getTipoTramite($params['tipo_tramite']);
        $tramite = Tramite::getTramite($params['establecimiento_id'], $tipoTramite->id);
        return $tramite ?: $tipoTramite;
	}

}