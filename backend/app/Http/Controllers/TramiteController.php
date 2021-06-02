<?php

namespace App\Http\Controllers;

use App\Traits\Controllers\SubidaArchivoTrait;
use App\Models\{Tramite, EstadoTramite};
use App\Http\Requests\Tramite\Store;
use App\Services\DocumentoService;
use Illuminate\Http\Request;

class TramiteController extends Controller {
    
    use SubidaArchivoTrait;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        $tramites = Tramite::all();
        return response()->json($tramites, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  Tramite  $tramite
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Tramite $tramite) {
        return response()->json($tramite, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Request\Tramite\Store  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request) {
        $tramite = Tramite::create($request->validated());
        $tipoTramiteId = $request->tipo_tramite_id;
        $establecimientoId = $request->establecimiento_id;
        $tipoDocumentoIds = $request->tipo_documento_ids;
        EstadoTramite::create([
            'tramite_id' => $tramite->id,
            'establecimiento_id' => $establecimientoId,
            'estado' => 'Iniciado'
        ]);
        DocumentoService::guardarRegistros($tipoDocumentoIds, $tramite->id, $tipoTramiteId, $establecimientoId);

        return response()->json($tramite->fresh(), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request $request
     * @param  Tramite  $tramite
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tramite $tramite) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Tramite  $tramite
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Tramite $tramite) {
        $tramite->deleted();
        // Eliminar todos los documentos?
        return response()->json(['mensaje' => "El tramite {$tramite->id} ha sido eliminado correctamente."], 200);
    }
}