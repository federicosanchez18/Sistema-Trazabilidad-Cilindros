import React, { useEffect } from "react";
import ListadoBase from "./listadoBase.js";

function ListadoTramites(props) {
 
	useEffect(() => {
	  // Acá se debería pegarle al backend para setear los valores que actualmente están mockeados
	}, [])

  return (
      <>
        <ListadoBase/> 
      </>
  );
}

export default ListadoTramites;