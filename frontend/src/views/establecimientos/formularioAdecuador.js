import React, { useState, useEffect } from "react";
import FormularioBase from "views/establecimientos/formularioBase.js";
import resolucion19896 from "assets/files/RESOLUCION_198_96.pdf";

function FormularioAdecuador(props) {
// Debería de obtenerse toda la info desde el backend
const [titulo] = useState("Establecimiento Adecuador")
const [reglamentaciones, setReglamentaciones] = useState([
{
"nombre": "Resolución 198/96",
"archivo": resolucion19896,
},
{
"nombre": "Resolución 738/07",
"archivo": "https://normas.gba.gob.ar/documentos/VJJ4kmcJ.html",
}
])
const [pdfs, setPdfs] = useState([

])

useEffect(() => {
// Acá se debería pegarle al backend para setear los valores que actualmente están mockeados
}, [])

return (
<>
<FormularioBase titulo={titulo} reglamentaciones={reglamentaciones} archivos={pdfs}/>
</>
);
}

export default FormularioAdecuador;
