<?php

namespace App\Traits\Controllers;

use App\Http\Requests\SubidaArchivo\SubidaArchivo;
use Illuminate\Http\Request;

trait SubidaArchivoTrait {

	public function subidaArchivo(SubidaArchivo $request) {
		$file = $request->file('archivo');
		$file->storeAs('uploads', $file->getClientOriginalName(), 'local');
		
		return response()->json(['message' => 'El archivo se guardó con éxito'], 200);
	}

}