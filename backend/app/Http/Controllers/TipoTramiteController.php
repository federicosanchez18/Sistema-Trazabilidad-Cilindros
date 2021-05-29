<?php

namespace App\Http\Controllers;

use App\Http\Requests\TipoTramite\Params;
use App\Services\TipoTramiteService;
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
     * @param  Params  $request
     * @return \Illuminate\Http\Response
     */
    public function show(Params $request) {
        $params = $request->query();
        $tipoTramiteOTramite = TipoTramiteService::getTipoTramiteOTramite($params);
        return response()->json($tipoTramiteOTramite, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  Request  $request
     * @param  string  $nombre
     * @return \Illuminate\Http\Response
     */
    public function getPorNombre(Request $request, $nombre) {
        $tipoTramite = TipoTramite::where('nombre', $nombre)->first();
        return response()->json($tipoTramite, 200);
    }

}