import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardText,
} from "reactstrap";

function Establecimiento(props) {
  // Traer la info desde el backend
  useEffect(() => {
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
          <p className="description">Razon Social: RONDA HORACIO ATILIO GILBERTO</p>
          <p className="description">Cuit: 20-14498244/5</p>
          <p className="description">Nº Establecimiento: 876 </p>
          <p className="description">Nº Presentación: SAN JUSTO</p>
          <p className="description">Planta: PLANTA SAN JUSTO</p>
          <p className="description">Domicilio: Calle: ARRIBEÑOS Nro: 3830 Ruta: ----------------------------- Km: ----------</p>
        </CardBody>
      </Card>
    </>
  );
}

export default Establecimiento;
