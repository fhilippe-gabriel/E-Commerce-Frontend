import React, { Component } from "react";
import Formulario from "./Formulario";

class NovoProduto extends Component {
  render() {
    return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="#" alt="" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crie o seu Produto
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formulario />
        </div>
      </div>
    );
  }
}

export default NovoProduto;
