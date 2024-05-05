import React, { Component } from "react";
import "./App.css";
import AppRoutes from "./Routes";

import NovoProduto from "./Componentes/NovoProduto";
import Menu from "./Componentes/Menu";
class App extends Component {
  render() {
    return (
      <div className="">
        <Menu />
        <AppRoutes />
      </div>
    );
  }
}

export default App;
