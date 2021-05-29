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
import useCilindros from "assets/mocks/cilindros.js"

const ListadoCilindros = () => {
  const [cilindros] = useCilindros()

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
                {cilindros.map((cilindro, index) => (
                  <tr key={index}>
                    <td>{cilindro.serial}</td>
                    <td>{cilindro.fabricante}</td>
                    <td>{cilindro.establecimiento}</td>
                    <td>{cilindro.tipo}</td>
                    <td>{cilindro.tipoGas}</td>
                    <td>{cilindro.iram}</td>
                    <td>{cilindro.estado}</td>
                    <td>{cilindro.fabricacion}</td>
                    <td>{cilindro.vencimiento}</td>
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

export default ListadoCilindros;