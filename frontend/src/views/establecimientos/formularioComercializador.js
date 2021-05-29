import React, { useState, useEffect } from "react";
import FormularioBase from "views/establecimientos/formularioBase.js";
import resolucion19896 from "assets/files/RESOLUCION_198_96.pdf";
import useReglamentaciones from "assets/mocks/reglamentaciones.js";
import TipoTramiteService from "../../services/TipoTramiteService";

function FormularioComercializador(props) {
    const [titulo] = useState("Comercializador")
    const [reglamentaciones] = useReglamentaciones()
    const [esTipoTramite, setEsTipoTramite] = useState(false)
    const [tramite, setTramite] = useState(null)

    useEffect(() => {
        TipoTramiteService.getPorEstablecimiento('comercializador', 33926)
            .then((response) => {
                var data = response.data.data 
                console.log("DATAAAA: ", data)
                setEsTipoTramite(!data.tipo_tramite_id)
                setTramite(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
        {tramite &&
            <FormularioBase titulo={titulo} tramite={tramite} establecimiento={33926} esTipoTramite={esTipoTramite} reglamentaciones={reglamentaciones}/>
        }
        </>
    );
}

export default FormularioComercializador;
