import { useState } from "react";
import resolucion19896 from "assets/files/RESOLUCION_198_96.pdf";

const useReglamentaciones = () => {
	const [reglamentaciones] = useState([
	    {
	      "nombre": "Resolución 198/96",
	      "archivo": resolucion19896,
	    },
	    {
	      "nombre": "Resolución 738/07",
	      "archivo": "https://normas.gba.gob.ar/documentos/VJJ4kmcJ.html",
	    }
	])

	return [reglamentaciones];
}

export default useReglamentaciones;