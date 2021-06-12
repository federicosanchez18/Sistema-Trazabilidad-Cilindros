import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  Input,
  Row,
  Col,
  Label,
  FormGroup,
  Button
} from "reactstrap";
import TipoTramiteService from "../../services/TipoTramiteService";
import { useHistory } from "react-router-dom";
import useAcciones from "assets/mocks/acciones.js";

function Inscripciones(props) { 
  const history = useHistory()
  const [acciones] = useAcciones()
  const [tipoTramites, setTipoTramites] = useState([])
  const [accion, setAccion] = useState(null)
  const [tipoTramite, setTipoTramite] = useState(null)

  const redireccionar = function() {
    history.push("/establecimiento/formulario-"+tipoTramite.toLowerCase())
  }

  useEffect(() => {
    TipoTramiteService.getAll()
      .then((response) => {
        setTipoTramites(response.data.data)
        console.log(response)
      })    
      .catch((error) => {
        console.log(error)
      })
  }, []);

  return (
    <>
      {tipoTramites !== [] &&
        <div className="content">
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tipo de Tramites</CardTitle>
                  <p className="category">Debe seleccionar la acción y el trámite a realizar</p>
                </CardHeader>
                <CardBody>
                <FormGroup>
                  <Label for="seleccionarAccion">Seleccionar la acción a realizar</Label>
                  <Input type="select" name="seleccionarAccion" id="seleccionarAccion" onChange={(e) => setAccion(e.target.value)}>
                    <option disabled>Seleccione una opción</option>
                    {acciones.map((accion, index) => {
                      return <option key={index} value={accion.slug}>{accion.nombre}</option>
                    })}
                  </Input>
                  <Label for="seleccionarTipoTramite">Seleccionar el Tipo de Trámite a realizar</Label>
                  <Input type="select" name="seleccionarTipoTramite" id="seleccionarTipoTramite" onChange={(e) => setTipoTramite(e.target.value)}>
                    <option disabled>Seleccione una opción</option>
                    {tipoTramites.map((tipoTramite, index) => {
                      return <option key={index} value={tipoTramite.nombre}>{tipoTramite.nombre}</option>
                    })}
                  </Input>
                </FormGroup>
                </CardBody>
                <CardFooter>
                  <Row xs="1" sm="2" md="2">
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col md="6">
                      <Button disabled={!(accion && tipoTramite)} onClick={() => redireccionar()} className="btn-fill" color="secondary" type="submit">
                        Realizar Tramite
                      </Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      }
    </>
  );
}

export default Inscripciones;