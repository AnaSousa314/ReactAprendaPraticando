import React, {Component} from 'react';
import Home from './Home';
import Card from './Card'

// EXEMPLO 01
// export default function Principal() {
//   const isbn = "ISBN: 978-85-7522-xxx-x";
//   const titulo = "React";
//   const autor = "Majour";
//   const tituloPagina = "Ultimos Lançamentos";
//   return (
//     <>
//       <Home 
//         isbn={isbn}
//         titulo={titulo}
//         autor={autor}
//         tituloPagina={tituloPagina}
//       ><h3>Últimos Lançamentos</h3></Home>
//     </>
//   )
// }

// EXEMPLO 02
// export default function Principal() {
//   const dados = [
//     { isbn: "978-85-7522-xxx-x", titulo: "React", autor: "Maujor" },
//     { isbn: "978-85-7522-776-3", titulo: "Design UX", autor: "Will" },
//     { isbn: "978-85-7522-550-9", titulo: "Laravel para Ninjas", autor: "Jack" }
//   ];
//   const tituloPagina = "Ultimos Lançamentos";
//   return(
//     <>
//       <Home dados={dados} tituloPagina={tituloPagina}/>
//     </>
//   )

// }

class Principal extends Component{
  state={
    tituloPagina:"Últimos Lançamentos",
    dados:{ isbn: "978-85-7522-xxx-x", titulo: "React", autor: "Maujor" }
  };

  // Um tipo de toggle
  handleAlterarTitulo=()=>{
    let titulo="";
    this.state.tituloPagina === 'Últimos Lançamentos'
      ? (titulo = "Categoria Programação")
      : (titulo = "Últimos Lançamentos");
    
    this.setState({tituloPagina: titulo});
  };

  render(){
    return(
      <>
        <Card 
          tituloPagina={this.state.tituloPagina}
          dados={this.state.dados}
          onAlterarTitulo={this.handleAlterarTitulo}
        />
      </>
    )
  }
}

export default Principal