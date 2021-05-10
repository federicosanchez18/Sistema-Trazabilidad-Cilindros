import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Row,
  Col,
  Label,
  CustomInput,
  FormText
} from "reactstrap";
import Establecimiento from "views/establecimientos/establecimiento.js";

function FormularioBase(props) {
  const {titulo, reglamentaciones, archivos} = props
  const [pdfs, setPdfs] = useState(archivos)
  const [formValido, setFormValido] = useState(false)
  /*
    Titulo del formulario
    Reglamentaciones que pueden ser más de 1, sería un array
      - Nombre del archivo.
      - Label.
      - Archivo
    Inputs para cargar archivos son más de 1, sería un array
      - Label.
    Establecimiento: un objeto con todos sus atributos
   */
  const checkeoArchivo = function(event) {
    var archivo = event.target.files[0]
    let nuevoListado = [...pdfs]
    nuevoListado[event.target.id]["validado"] = archivo.type === "application/pdf"
    setPdfs(nuevoListado)
    setFormValido(pdfs.every((pdf) => pdf.validado))
  }

  const verArchivo = function(archivo) {
    window.open(archivo)
  }

  useEffect(() => {
  }, [])

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">{titulo}</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  {reglamentaciones.map((reglamentacion, index) => (
                    <Row key={"reglamentacion"+index}>
                      <Col md="8">
                        <Label for={"reglamentacion"+index.toString()}>
                          {reglamentacion.nombre}
                          <Col md="12">
                            <Button size="sm" onClick={(e)=> verArchivo(reglamentacion.archivo)} className="btn-fill" color="info">
                              Ver
                            </Button>
                          </Col>
                        </Label>
                      </Col>
                    </Row>
                  ))}
                  {pdfs.map((pdf, index) => (
                    <Row key={index}>
                      <Col md="8">
                        <FormGroup>
                          <Label for={index.toString()}>{pdf.nombre}</Label>
                          <CustomInput disabled={pdf.autorizado} onChange={(e) => checkeoArchivo(e)} type="file" id={index} name={index} accept="application/pdf"/>
                          <FormText hidden={pdf.autorizado || pdf.validado}>Debe ser un archivo .pdf</FormText>
                        </FormGroup>
                      </Col>
                    </Row>
                  ))}
                </Form>
              </CardBody>
              <CardFooter>
                <Row xs="1" sm="2" md="4">
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <Button disabled={!formValido} className="btn-fill" color="secondary" type="submit">
                      Enviar
                    </Button>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Establecimiento/>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FormularioBase;