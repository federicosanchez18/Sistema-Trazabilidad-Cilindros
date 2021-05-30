import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import useTramites from "assets/mocks/tramites.js"



const ListadoTramites = () => {
  const [tramites] = useTramites()
  console.log([tramites])

  return (
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
                  <th>Establecimiento </th>
                  <th>Tipo de Tramite</th>  
                  <th>Estado de tramite</th>
                  <th>Fecha de creacion</th>
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
  );
}

export default ListadoTramites;