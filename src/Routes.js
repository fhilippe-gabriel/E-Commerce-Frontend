import React, { Component } from "react";
import NovoProduto from "./Componentes/NovoProduto";
import Home from "./Componentes/Home";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class Formulario extends Component {
  state = {
    produtos: {},
    produto: {},
    url: "http://localhost:8000/api/customer",
  };

  createProduto = async (data) => {
    this.setState({ loader: true });

    await axios.post(this.state.url, {
      nome: data.nome,
      tipo: data.tipo,
      preco: data.preco,
    });
  };
  onFormSubmit = (data) => {
    // console.log("app", data);
    if (data.isEdit) {
      this.editProduto(data);
    } else {
      this.createProduto(data);
    }
  };
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/novo"
            element={<NovoProduto />}
            customer={this.state.customer}
            onFormSubmit={this.onFormSubmit}
          ></Route>
        </Routes>
      </Router>
    );
  }
}

export default Formulario;
