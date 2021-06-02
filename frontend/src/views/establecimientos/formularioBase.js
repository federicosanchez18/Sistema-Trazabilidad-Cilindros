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
  FormText,
  Alert,
  FormFeedback
} from "reactstrap";
import Establecimiento from "views/establecimientos/establecimiento.js";
import TipoTramiteService from "../../services/TipoTramiteService";
import TramiteService from "../../services/TramiteService";

function FormularioBase(props) {
  // TODO: Separar el formulario base en partes mas chicas para que no sea muy engorroso
  const {titulo, tramite, establecimiento, esTipoTramite, reglamentaciones} = props
  const [tituloForm, setTituloForm] = useState("Establecimiento " + titulo)
  const [documentos, setDocumentos] = useState(null) 
  const [formValido, setFormValido] = useState(false)
  const [count, setCount] = useState(0)
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
    // TODO: Mejorar el checkeo de archivo, agregando validaciones con tooltips y mensajes.
    // Mostrar una notificación al momento de guardar por si se guardó bien u ocurrió un error.
    var archivo = event.target.files[0]
    var index = event.target.id
    var nuevoListado = [...documentos]
    var valid = true
    var documento2 = documentos.find((documento) => {
      return documento.id == index
    })
    if (archivo.type !== "application/pdf" || archivo.size > 2097152) {
      console.log(documento2, index)
      documento2.valido = false
      valid = false
    } else {
      documento2.valido = true
    }

    if (count === documentos.length) {
      setFormValido(true)
    }
    if (documento2.valido) {
      setCount((count) => {return count + 1})
    }
    console.log(documento2)
    if (valid) {
      var data = new FormData();
      data.append("tipo_documento_id", esTipoTramite ? event.target.id : documento2.tipo_documento.id)
      data.append("establecimiento_id", establecimiento)
      data.append("archivo", archivo)
      data.append("tipo_tramite_id", esTipoTramite ? tramite.id : tramite.tipo_tramite_id)
      console.log(data)
      TramiteService.subidaArchivo(data)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const verArchivo = function(archivo) {
    window.open(archivo)
  }

  const crearTramite = function() {
    // TODO: Mejorar el código y simplificar funcionalidad.
    var documentoIds = []
    documentos.forEach(function(documento) {
      if (esTipoTramite) {
        documentoIds.push(documento.id)
      } else {
        documentoIds.push(documento.tipo_documento.id)
      }
    })
    var data = {}
    data.establecimiento_id = establecimiento
    data.tipo_tramite_id = esTipoTramite ? tramite.id : tramite.tipo_tramite_id
    data.tipo_documento_ids = documentoIds
    if (esTipoTramite) {
      TramiteService.create(data)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  useEffect(() => {
    //console.log(tramite)
    setDocumentos(esTipoTramite ? tramite.tipo_documentos : tramite.documentos)
    console.log(documentos)
  }, [tramite, documentos])

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">{tituloForm}</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  {reglamentaciones && reglamentaciones.map((reglamentacion, index) => (
                    <Row key={"reglamentacion"+index}>
                      <Col md="8">
                        <Label for={"reglamentacion"+index.toString()}>
                          {reglamentacion.nombre}
                          <Col md="12">
                            <Button size="sm" onClick={(e, documento)=> verArchivo(reglamentacion.archivo, documento)} className="btn-fill" color="info">
                              Ver
                            </Button>
                          </Col>
                        </Label>
                      </Col>
                    </Row>
                  ))}
                  {esTipoTramite ? (
                    <div>
                      {documentos && documentos.map((documento) => (
                        <Row key={documento.id}>
                          <Col md="8">
                            <FormGroup>
                              <Label for={documento.id.toString()}>{documento.nombre}</Label>
                              <CustomInput onChange={(e) => checkeoArchivo(e)} type="file" id={documento.id} name={documento.id} accept="application/pdf"/>
                              <FormText>Debe ser un archivo .pdf</FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                      ))}
                    </div>
                    ) : (
                    <div>
                      {documentos && documentos.map((documento) => (
                        <Row key={documento.id}>
                          <Col md="8">
                            <FormGroup>
                              <Label for={documento.id.toString()}>{documento.tipo_documento.nombre}</Label>
                              <CustomInput disabled={documento.autorizado} onChange={(e) => checkeoArchivo(e)} type="file" id={documento.id} name={documento.id} accept="application/pdf"/>
                              <FormText>Debe ser un archivo .pdf</FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                      ))}
                    </div>
                    )
                  }
                </Form>
              </CardBody>
              <CardFooter>
                <Row xs="1" sm="2" md="4">
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col>
                    <Button disabled={!formValido} onClick={() => crearTramite()} className="btn-fill" color="secondary" type="submit">
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