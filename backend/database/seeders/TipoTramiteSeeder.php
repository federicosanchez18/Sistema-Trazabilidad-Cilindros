<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TipoTramiteSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $tipoTramites = [
			['id' => 1, 'nombre' => 'Fabricante', 'habilitado_gnc' => true],
			['id' => 2, 'nombre' => 'Productor/Llenador', 'habilitado_gnc' => false],
			['id' => 3, 'nombre' => 'Adecuador', 'habilitado_gnc' => true],
			['id' => 4, 'nombre' => 'Trasvasador', 'habilitado_gnc' => false],
			['id' => 5, 'nombre' => 'Comercializador', 'habilitado_gnc' => false],
			['id' => 6, 'nombre' => 'Importador', 'habilitado_gnc' => true],
		];  

		DB::table('tipo_tramites')->insert($tipoTramites);
    }
}

/*
Nota de presentación sería la info que recibimos de los establecimientos

GNC Fabricantes, Adecuadores e Importadores:
	Constancia de Inscripción

Sólo Fabricantes:
	Memoria de Cálculo por Tipo de Cilindro

Todos menos Comercializadores e Importadores:
	Equipos Específicos

Todos menos Comercializadores:
	Proceso a desarrollar
	Diagrama de flujo y memoria técnica
	Contrato de Profesional

Todos:
	Estatuto o Contrato Social
	Libro de Actas Foliados
	Habilitación Municipal

Las resoluciones a leer son las mismas para todos.

 */