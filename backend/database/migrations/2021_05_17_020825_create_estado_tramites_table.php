<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEstadoTramitesTable extends Migration {
 
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('estado_tramites', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tramite_id');
            $table->unsignedBigInteger('establecimiento_id');
            $table->enum('estado', config('general.tramites.estados'));
            $table->timestamps();

            $table->foreign('tramite_id')->references('id')->on('tramites');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('estado_tramites');
    }
}