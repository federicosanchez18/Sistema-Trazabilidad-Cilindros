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
            <h5 className="title">Establecimiento</h5>
          </div>
          <p className="description">Razon Social: RONDA HORACIO ATILIO GILBERTO</p>
          <p className="description">Cuit: 20-14498244/5</p>
          <p className="description">Planta: PLANTA SAN JUSTO</p>
          <p className="description">Partido: LA MATANZA</p>
          <p className="description">Localidad: SAN JUSTO</p>
          <p className="description">Domicilio: Calle: ARRIBEÑOS Nro: 3830 Ruta: ----------------------------- Km: ----------</p>
        </CardBody>
      </Card>
    </>
  );
}

export default Establecimiento;