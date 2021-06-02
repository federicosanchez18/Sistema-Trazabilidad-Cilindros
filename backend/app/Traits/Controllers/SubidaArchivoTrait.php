<?php

namespace App\Traits\Controllers;

use App\Http\Requests\SubidaArchivo\SubidaArchivo;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

trait SubidaArchivoTrait {

	public function subidaArchivo(SubidaArchivo $request) {
		$file = $request->file('archivo');
		$filename = $request->tipo_tramite_id.'_'.$request->tipo_documento_id.'_'.$request->establecimiento_id.'.pdf';
		Storage::disk('public')->delete('/documentos/'.$filename);
		$path = Storage::disk('public')->putFileAs('/documentos', $file, $filename, 'public');
		
		return response()->json(['message' => 'El archivo se guardó con éxito'], 200);
	}

}