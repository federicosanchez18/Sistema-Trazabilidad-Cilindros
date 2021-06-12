/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import ListadoCilindros from "views/cilindros/listado.js";
import ListadoTramites from "views/tramites/listadoTramites.js";
import Inscripciones from "views/tramites/inscripciones.js";
import FormularioFabricante from "views/establecimientos/formularioFabricante.js";
import FormularioComercializador from "views/establecimientos/formularioComercializador.js";
import FormularioImportador from "views/establecimientos/formularioImportador.js";
import FormularioProductorLlenador from "views/establecimientos/formularioProductorLlenador.js";
import FormularioTrasvasador from "views/establecimientos/formularioTrasvasador.js";
import FormularioAdecuador from "views/establecimientos/formularioAdecuador.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

ReactDOM.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
          <Route path="/cilindros" render={(props) => <ListadoCilindros {...props} />} />
          <Route path="/establecimiento/formulario-fabricante" render={(props) => <FormularioFabricante {...props} />} />
          <Route path="/establecimiento/formulario-comercializador" render={(props) => <FormularioComercializador {...props} />} />
          <Route path="/establecimiento/formulario-importador" render={(props) => <FormularioImportador {...props} />} />
          <Route path="/establecimiento/formulario-productor-llenador" render={(props) => <FormularioProductorLlenador {...props} />} />
          <Route path="/establecimiento/formulario-trasvasador" render={(props) => <FormularioTrasvasador {...props} />} />
          <Route path="/establecimiento/formulario-adecuador" render={(props) => <FormularioAdecuador {...props} />} />
          <Route path="/tramites/inscripciones" render= {(props) => <Inscripciones {...props}/>} />
          <Route path="/tramites" render= {(props) => <ListadoTramites {...props}/>} />
          {/*<Route path="/tramitesbase" render= {(props) => <ListadoBase {...props}/>} />*/}
          <Redirect from="/" to="/tramites/inscripciones" />
        </Switch>
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
