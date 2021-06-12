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
  const {titulo,subtitulo,establecimiento} = props 
  const [tramites] = useTramites();
  const  labels = useState(['CUIT','ESTABLECIMIENTO','TIPO TRAMITE','ESTADO DEL TRAMITE','FECHA DE CREACIÒN'])
  const title = titulo
  const subtitle = subtitulo       

  return (
    <>
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">{title} </CardTitle>
              <p className="category">{subtitle}</p>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                      {labels[0].map((label,i) => { 
                      return <th > {label} </th> })}
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

