<?php 

namespace App\Http\Requests\Tramite;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\{RelacionadoConTipoTramite, DocumentosNecesariosSegunTipoTramite};

class Store extends FormRequest {

    public function rules() {

        return [
			'establecimiento_id' => ['required', 'integer'],
			'tipo_tramite_id' => ['required', 'integer', 'exists:tipo_tramites,id'],
			'tipo_documento_ids' => ['required', 'array', new DocumentosNecesariosSegunTipoTramite($this->tipo_tramite_id)],
			'tipo_documento_ids.*' => ['required', 'integer', 'exists:tipo_documentos,id', new RelacionadoConTipoTramite($this->tipo_tramite_id)],
        ];
    }
    
}