<?php 

namespace App\Http\Requests\SubidaArchivo;

use Illuminate\Foundation\Http\FormRequest;

class SubidaArchivo extends FormRequest {

    public function rules() {

        return [
			'archivo' => ['required', 'file', 'mimetypes:application/pdf', 'mimes:pdf', 'max:2048'],
			'tipo_tramite_id' => ['required', 'integer', 'exists:tipo_tramites,id'],
			'tipo_documento_id' => ['required', 'integer', 'exists:tipo_documentos,id'],
			'establecimiento_id' => ['required', 'integer'],
        ];
    }
    
}