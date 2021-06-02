import { useState, useEffect } from "react";

const NUMEROS = '1234567890'
const ESTABLECIMIENTOS = ['Llenador', 'Trasvasador', 'Proveedor', 'Fabricante', 'Adecuador', 'Comercializador']
const TIPOTRAMITE = ['Llenador', 'Trasvasador', 'Proveedor', 'Fabricante', 'Adecuador', 'Comercializador']
const ESTADOTRAMITES = ['Aceptado','Pendiente','Finalizado']
const FECHACREACION = '20200101'
/*
  <th>Id de Establecimiento</th>
                  <th>Establecimiento </th>
                  <th>Tipo de Tramite</th>  
                  <th>Estado de tramite</th>
                  <th>Fecha de creacion</th>
                  
                </tr>
*/
const useTramites = () => {
	const [constantes] = useState({
		idEstablecimiento: NUMEROS,
		establecimiento: ESTABLECIMIENTOS,
		tipoTramite: TIPOTRAMITE,
		estadoTramite :ESTADOTRAMITES,
		fechaCreacion : FECHACREACION,
		total : 20
	})
	const [iterador, setIterador] = useState(1)
	const [tramites, setTramites] = useState([])
	
	useEffect(() => {
		
		const agregarTramites = () => {
			setTramites(c => [...c,
				{
					idEstablecimiento: constantes.idEstablecimiento.substring(Math.floor(Math.random() * constantes.idEstablecimiento.length)),
					establecimiento: constantes.establecimiento[Math.floor(Math.random() * constantes.establecimiento.length)],
					tipoTramite: constantes.tipoTramite[Math.floor(Math.random() * constantes.tipoTramite.length)],
					estadoTramite :constantes.estadoTramite[Math.floor(Math.random() * constantes.estadoTramite.length)],
					fechaCreacion : constantes.fechaCreacion
				}
			])
		}

		if (iterador <= constantes.total) {
			agregarTramites()
			setIterador(iterador => iterador + 1)
		}

	}, [iterador, constantes])

	return [tramites];
}

export default useTramites;