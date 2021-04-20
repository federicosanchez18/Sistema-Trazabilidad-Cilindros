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

function CylindersList() {
  const numbers = '1234567890'
  const serialSize = 10
  const randomDate = function(start, end) {
    var date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    var dd = String(date.getDate()).padStart(2, '0')
    var mm = String(date.getMonth() + 1).padStart(2, '0')
    var yyyy = date.getFullYear()
    return dd + '/' + mm + '/' + yyyy
  }
  const generateSerials = function() {
    var randomNumber;
    var randomSerial = "";
    for (var i = 0; i < serialSize; i = i + 1) {
      randomNumber = Math.floor(Math.random() * numbers.length)
      randomSerial += numbers.substring(randomNumber, randomNumber + 1)
    }
    return randomSerial;
  }
  const establishments = ['Llenador', 'Trasvasador', 'Proveedor', 'Fabricante', 'Adecuador', 'Comercializador']
  const types = ['rojo', 'verde', 'amarillo', 'blanco', 'naranja']
  const gasType = ['Aire', 'Ar', 'He', 'H2', 'N2', 'O2', 'CO2', 'N2O']
  const states = ['Nuevo', 'Usado', 'Readecuados']
  var total = 20
  var cylinders = []
  for(let i = 0; i < total; i++) {
    cylinders.push(
      {
        serie: generateSerials(),
        manufacturer: establishments[Math.floor(Math.random() * establishments.length)],
        establishment: establishments[Math.floor(Math.random() * establishments.length)],
        type: types[Math.floor(Math.random() * types.length)],
        gasType: gasType[Math.floor(Math.random() * gasType.length)],
        iram: generateSerials(),
        state: states[Math.floor(Math.random() * states.length)],
        manufacturing: randomDate(new Date(2010, 0, 1), new Date()),
        maturities:  randomDate(new Date(2015, 0, 1), new Date(2025, 0, 1))
      }
    )
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
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
      </div>
    </>
  );
}

export default CylindersList;