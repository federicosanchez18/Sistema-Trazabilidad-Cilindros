<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TramiteController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->group(function() {
Route::middleware('api')->group(function() {

	# ------
	# Soap Controller
	# --------------------
	Route::get('soaps/establecimiento/{idEstablecimiento}', 'App\Http\Controllers\SoapClient\SoapController@getEstablecimiento');

	# ------
	# Tramite Controller
	# --------------------
	Route::post('tramites/subida-archivo', 'App\Http\Controllers\TramiteController@subidaArchivo');
	Route::apiResource('tramites', TramiteController::class);

	# ------
	# Tipo Tramite Controller
	# --------------------
	Route::get('tipo-tramites/con-establecimiento', 'App\Http\Controllers\TipoTramiteController@show');
	Route::get('tipo-tramites/{nombre}', 'App\Http\Controllers\TipoTramiteController@getPorNombre');
	Route::get('tipo-tramites', 'App\Http\Controllers\TipoTramiteController@index');
});
//});