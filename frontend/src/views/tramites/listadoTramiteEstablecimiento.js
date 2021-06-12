import React, { useEffect,useState } from "react";
import ListadoBase from "./listadoBase.js";
import TramiteService from '../../services/TramiteService'

function ListadoTramiteEstablecimiento(props) {
    
    const establecimiento_id = props; // tiene el id de establecimiento
    var establecimiento = useState(null)
 
    
    
    const setProprs =function(data){


    }
	useEffect(() => {
        TramiteService.tramitesDelEstablecimiento(33926).then((response) => {
            var Establecimiento = response.data.data.Establecimiento
            console.log(Establecimiento)
            establecimiento = response.data.data
            }).catch((error) => {
            console.log(error)
        })
        
	}, [])

  return (
      <> {establecimiento &&
        <ListadoBase titulo = "Listado de tramites por establecimiento" subtitulo = 'Algunos datos de los tramites'/>  }
      </> 
  );

}

export default ListadoTramiteEstablecimiento;