<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentosTable extends Migration {
    
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('documentos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tramite_id');
            $table->unsignedBigInteger('tipo_documento_id');
            $table->string('nombre_archivo');
            $table->boolean('autorizado');
            $table->timestamps();

            $table->foreign('tramite_id')->references('id')->on('tramites')->onDelete('cascade');
            $table->foreign('tipo_documento_id')->references('id')->on('tipo_documentos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('documentos');
    }
}