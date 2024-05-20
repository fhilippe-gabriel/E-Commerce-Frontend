import React, { Component } from "react";
import NovoProduto from "./Componentes/NovoProduto";
import Home from "./Componentes/Home";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class Formulario extends Component {
  state = {
    produtos: {},
    produto: {},
    url: "http://localhost:8000/api/produtos",
  };
  getProduto = async () => {
    this.setState({ loader: true });
    const produtos = await axios.get(this.state.url);
    this.setState({ produtos: produtos.data, loader: false });
  };

  deleteProduto = async (id) => {
    this.setState({ loader: true });
    await axios.delete(`${this.state.url}/${id}`);

    this.getProduto();
  };

  createProduto = async (data) => {
    this.setState({ loader: true });

    await axios.post(this.state.url, {
      nome: data.nome,
      tipo: data.tipo,
      preco: data.preco,
    });
  };

  editProduto = async (data) => {
    this.setState({ produto: {}, loader: true });

    await axios.put(`${this.state.url}/${data.id}`, {
      nome: data.nome,
      tipo: data.tipo,
      preco: data.preco,
    });
    this.getProduto();
  };

  onDelete = (id) => {
    // console.log("app", id);
    this.deleteProduto(id);
  };
  onEdit = (data) => {
    // console.log("app", data);
    this.setState({ produto: data });
  };

  onFormSubmit = (data) => {
    // console.log("app", data);
    if (data.isEdit) {
      this.editProduto(data);
    } else {
      this.createProduto(data);
    }
  };
  componentDidMount() {
    this.getProduto();
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/novo"
            element={<NovoProduto />}
            produto={this.state.produto}
            onFormSubmit={this.onFormSubmit}
          ></Route>
        </Routes>
      </Router>
    );
  }
}

export default Formulario;
