<?php 

namespace App\Http\Requests\SubidaArchivo;

use Illuminate\Foundation\Http\FormRequest;

class SubidaArchivo extends FormRequest {

    public function rules() {

        return [
			'archivo' => ['required', 'file', 'mimetypes:application/pdf', 'mimes:pdf', 'max:2048'],
        ];
    }
    
}