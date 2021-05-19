<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TipoTramite;

class TipoTramiteController extends Controller {
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        $tipoTramites = TipoTramite::all();
        return response()->json($tipoTramites, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  TipoTramite  $tipoTramite
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $nombreTipoTramite) {
        $tipoTramite = TipoTramite::where('nombre', $nombreTipoTramite)->first();
        return response()->json($tipoTramite, 200);
    }

}