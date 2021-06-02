<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TipoTramiteDocumentoSeeder extends Seeder {

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $tipoTramiteDocumentos = [
        	/* Fabricante: */
			['tipo_tramite_id' => 1, 'tipo_documento_id' => 1], // Constancia de Inscripcion
			['tipo_tramite_id' => 1, 'tipo_documento_id' => 2], // Memoria de Cálculo por Tipo de Cilindro
			['tipo_tramite_id' => 1, 'tipo_documento_id' => 3], // Equipos Específicos
			['tipo_tramite_id' => 1, 'tipo_documento_id' => 4], // Proceso a Desarrollar
			['tipo_tramite_id' => 1, 'tipo_documento_id' => 5], // Diagrama de Flujo y Memoria Ténica
			['tipo_tramite_id' => 1, 'tipo_documento_id' => 6], // Contrato de Profesional
			['tipo_tramite_id' => 1, 'tipo_documento_id' => 7], // Estatuto o Contrato Social
			['tipo_tramite_id' => 1, 'tipo_documento_id' => 8], // Libro de Actas Foliados
			['tipo_tramite_id' => 1, 'tipo_documento_id' => 9], // Habilitación Municipal
			/* Productor/Llenador: */
			['tipo_tramite_id' => 2, 'tipo_documento_id' => 3], // Equipos Específicos
			['tipo_tramite_id' => 2, 'tipo_documento_id' => 4], // Proceso a Desarrollar
			['tipo_tramite_id' => 2, 'tipo_documento_id' => 5], // Diagrama de Flujo y Memoria Ténica
			['tipo_tramite_id' => 2, 'tipo_documento_id' => 6], // Contrato de Profesional
			['tipo_tramite_id' => 2, 'tipo_documento_id' => 7], // Estatuto o Contrato Social
			['tipo_tramite_id' => 2, 'tipo_documento_id' => 8], // Libro de Actas Foliados
			['tipo_tramite_id' => 2, 'tipo_documento_id' => 9], // Habilitación Municipal
			/* Adecuador: */
			['tipo_tramite_id' => 3, 'tipo_documento_id' => 1], // Constancia de Inscripcion
			['tipo_tramite_id' => 3, 'tipo_documento_id' => 3], // Equipos Específicos
			['tipo_tramite_id' => 3, 'tipo_documento_id' => 4], // Proceso a Desarrollar
			['tipo_tramite_id' => 3, 'tipo_documento_id' => 5], // Diagrama de Flujo y Memoria Ténica
			['tipo_tramite_id' => 3, 'tipo_documento_id' => 6], // Contrato de Profesional
			['tipo_tramite_id' => 3, 'tipo_documento_id' => 7], // Estatuto o Contrato Social
			['tipo_tramite_id' => 3, 'tipo_documento_id' => 8], // Libro de Actas Foliados
			['tipo_tramite_id' => 3, 'tipo_documento_id' => 9], // Habilitación Municipal
			/* Trasvasador: */
			['tipo_tramite_id' => 4, 'tipo_documento_id' => 3], // Equipos Específicos
			['tipo_tramite_id' => 4, 'tipo_documento_id' => 4], // Proceso a Desarrollar
			['tipo_tramite_id' => 4, 'tipo_documento_id' => 5], // Diagrama de Flujo y Memoria Ténica
			['tipo_tramite_id' => 4, 'tipo_documento_id' => 6], // Contrato de Profesional
			['tipo_tramite_id' => 4, 'tipo_documento_id' => 7], // Estatuto o Contrato Social
			['tipo_tramite_id' => 4, 'tipo_documento_id' => 8], // Libro de Actas Foliados
			['tipo_tramite_id' => 4, 'tipo_documento_id' => 9], // Habilitación Municipal
			/* Comercializador: */
			['tipo_tramite_id' => 5, 'tipo_documento_id' => 7], // Estatuto o Contrato Social
			['tipo_tramite_id' => 5, 'tipo_documento_id' => 8], // Libro de Actas Foliados
			['tipo_tramite_id' => 5, 'tipo_documento_id' => 9], // Habilitación Municipal
			/* Importador: */
			['tipo_tramite_id' => 6, 'tipo_documento_id' => 1], // Constancia de Inscripcion
			['tipo_tramite_id' => 6, 'tipo_documento_id' => 4], // Proceso a Desarrollar
			['tipo_tramite_id' => 6, 'tipo_documento_id' => 5], // Diagrama de Flujo y Memoria Ténica
			['tipo_tramite_id' => 6, 'tipo_documento_id' => 6], // Contrato de Profesional
			['tipo_tramite_id' => 6, 'tipo_documento_id' => 7], // Estatuto o Contrato Social
			['tipo_tramite_id' => 6, 'tipo_documento_id' => 8], // Libro de Actas Foliados
			['tipo_tramite_id' => 6, 'tipo_documento_id' => 9], // Habilitación Municipal
		];  

		DB::table('tipo_tramite_documentos')->insert($tipoTramiteDocumentos);
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