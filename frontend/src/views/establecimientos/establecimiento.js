import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardText,
} from "reactstrap";
import EstablecimientoService from "../../services/EstablecimientoService";

function Establecimiento(props) {
  const [establecimiento, setEstablecimiento] = useState({})

  useEffect(() => {
    EstablecimientoService.get(33926)
      .then((response) => {
        setEstablecimiento(response.data.data.Establecimiento)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Card className="card-user">
        <CardBody>
          <CardText />
          <div className="author">
            <img
              alt="..."
              src={require("assets/img/opds.png").default}
            />
            <h5 className="title">Establecimiento</h5>
          </div>
          <p className="description">Razon Social: {establecimiento.razon_social}</p>
          <p className="description">Cuit: {establecimiento.cuit}</p>
          {/*Falta ver qué sería el número de establecimiento*/}
          <p className="description">Nº Establecimiento: 876 </p>
          <p className="description">Nº Presentación: {establecimiento.localidad}</p>
          <p className="description">Planta: {establecimiento.planta}</p>
          <p className="description">Domicilio: {establecimiento.domicilio}</p>
        </CardBody>
      </Card>
    </>
  );
}

export default Establecimiento;
