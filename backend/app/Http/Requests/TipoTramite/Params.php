<?php 

namespace App\Http\Requests\TipoTramite;

use Illuminate\Foundation\Http\FormRequest;

class Params extends FormRequest {

    public function rules() {

        return [
			'establecimiento_id' => ['required', 'integer'],
			'tipo_tramite' => ['required', 'string', 'exists:tipo_tramites,nombre']
        ];
    }
    
}