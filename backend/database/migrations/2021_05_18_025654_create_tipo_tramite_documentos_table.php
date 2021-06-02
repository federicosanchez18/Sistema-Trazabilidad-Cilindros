<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipoTramiteDocumentosTable extends Migration {
    
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('tipo_tramite_documentos', function (Blueprint $table) {
            $table->unsignedBigInteger('tipo_tramite_id');
            $table->unsignedBigInteger('tipo_documento_id');
            $table->primary(['tipo_tramite_id', 'tipo_documento_id'], 'tipo_tramite_documento_id');

            $table->foreign('tipo_tramite_id')->references('id')->on('tipo_tramites')->onDelete('cascade');
            $table->foreign('tipo_documento_id')->references('id')->on('tipo_documentos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('tipo_tramite_documentos');
    }
}