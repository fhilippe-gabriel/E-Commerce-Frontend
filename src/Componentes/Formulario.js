import React, { Component, useState } from "react";

class Formulario extends Component {
  onEdit = (id) => {
    // this.props.onEdit(id);
    console.log("Editando Produto ", id);
  };
  render() {
    return (
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label
            htmlFor="Name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nome do Produto
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Tipo
          </label>
          <div className="mt-2">
            <select
              id="tipo"
              name="tipo"
              autoComplete="type"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option></option>
              <option>Tipo 1</option>
              <option>Tipo 2</option>
              <option>Tipo 3 </option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <label
              htmlFor="Name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Preço
            </label>
            <div className="mt-2">
              <input
                id="preco"
                name="preco"
                type="number"
                autoComplete="price"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Salvar o Produto
          </button>
        </div>
      </form>
    );
  }
}

export default Formulario;
