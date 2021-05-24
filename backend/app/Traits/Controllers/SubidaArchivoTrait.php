<?php

namespace App\Traits\Controllers;

use App\Http\Requests\SubidaArchivo\SubidaArchivo;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

trait SubidaArchivoTrait {

	public function subidaArchivo(SubidaArchivo $request) {
		$file = $request->file('archivo');
		Storage::disk('public')->delete('/documentos/'.$file->getClientOriginalName());
		$path = Storage::disk('public')->putFileAs('/documentos', $file, $file->getClientOriginalName(), 'public');
		
		return response()->json(['message' => 'El archivo se guardó con éxito'], 200);
	}

}