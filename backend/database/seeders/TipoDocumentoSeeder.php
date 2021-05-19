<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TipoDocumentoSeeder extends Seeder {
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
		$tipoDocumentos = [
			['id' => 1, 'nombre' => 'Constancia de Inscripcion'],
			['id' => 2, 'nombre' => 'Memoria de Calculo por Tipo de Cilindro'],
			['id' => 3, 'nombre' => 'Equipos Especificos'],
			['id' => 4, 'nombre' => 'Proceso a Desarrollar'],
			['id' => 5, 'nombre' => 'Diagrama de Flujo y Memoria Tecnica'],
			['id' => 6, 'nombre' => 'Contrato de Profesional'],
			['id' => 7, 'nombre' => 'Estatuto o Contrato Social'],
			['id' => 8, 'nombre' => 'Libro de Actas Foliados'],
			['id' => 9, 'nombre' => 'Habilitacion Municipal'],
		];        

		DB::table('tipo_documentos')->insert($tipoDocumentos);
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
