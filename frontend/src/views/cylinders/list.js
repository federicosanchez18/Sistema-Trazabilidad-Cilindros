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
import useCylinders from "assets/mocks/cylinders.js"

const CylindersList = () => {
  const [cylinders] = useCylinders()

  return (
    <Row>
      <Col md="12">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Listado de Cilindros</CardTitle>
            <p className="category">Algunos datos de los cilindros</p>
          </CardHeader>
          <CardBody>
            <Table className="tablesorter" responsive>
              <thead className="text-primary">
                <tr>
                  <th>#Serie</th>
                  <th>Marca del Fabricante</th>
                  <th>Establecimiento</th>
                  <th>Tipo</th>
                  <th>Tipo de Gas</th>
                  <th>#IRAM</th>
                  <th>Estado</th>
                  <th>Fabricación</th>
                  <th>Vencimiento</th>
                </tr>
              </thead>
              <tbody>
                {cylinders.map((cylinder, index) => (
                  <tr key={index}>
                    <td>{cylinder.serie}</td>
                    <td>{cylinder.manufacturer}</td>
                    <td>{cylinder.establishment}</td>
                    <td>{cylinder.type}</td>
                    <td>{cylinder.gasType}</td>
                    <td>{cylinder.iram}</td>
                    <td>{cylinder.state}</td>
                    <td>{cylinder.manufacturing}</td>
                    <td>{cylinder.maturities}</td>
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

export default CylindersList;