import React, { Component } from "react";
import "./App.css";

import Tabela from "./Tabela";
import Formulario from "./Formulario";

class App extends Component {
  state = {
    autores: [
      {
        nome: "Paulo",
        livro: "React",
        preco: "1000",
      },
      {
        nome: "Daniel",
        livro: "Java",
        preco: "99",
      },
      {
        nome: "Marcos",
        livro: "Design",
        preco: "150",
      },
      {
        nome: "Bruno",
        livro: "DevOps",
        preco: "100",
      },
    ],
  };

  escutadorDeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] });
  }
  
  removeAutor = (index) => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    });
  };

  render() {
    return (
      <div>
      <Tabela autores={this.state.autores} removeAutor = { this.removeAutor }/> 
      <Formulario escutadorDeSubmit={this.escutadorDeSubmit}/>
      </div> 
    );
  }

}

export default App;
