import { useState } from "react";

const useAcciones = () => {
	const [acciones] = useState([
	    {
	      "nombre": "Inscripción",
	      "slug": "inscripcion"
	    },
	    {
	      "nombre": "Actualización",
	      "slug": "actualizacion"
	    },
	    {
	      "nombre": "Renovación",
	      "slug": "renovacion"
	    }
	])

	return [acciones];
}

export default useAcciones;