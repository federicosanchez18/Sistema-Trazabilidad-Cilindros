import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import useTramites from "assets/mocks/tramites.js";

function ListadoBase(props) { 
  const [tramites] = useTramites();

  return (
    <>
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Listado de Tramites</CardTitle>
              <p className="category">Algunos datos de los tramites</p>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Id de Establecimiento</th>
                    <th>Establecimiento</th>
                    <th>Tipo de Tramite</th>  
                    <th>Estado del tramite</th>
                    <th>Fecha de creación</th>
                  </tr>
                </thead>
                <tbody>
                  {tramites.map((tramite, index) => (
                    <tr key={index}>
                    <td>{tramite.idEstablecimiento}</td>
                    <td>{tramite.establecimiento}</td>
                    <td>{tramite.tipoTramite}</td>
                    <td>{tramite.estadoTramite}</td>
                    <td>{tramite.fechaCreacion}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default ListadoBase;