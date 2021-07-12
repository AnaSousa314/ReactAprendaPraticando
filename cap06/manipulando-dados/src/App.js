import React, {Component} from 'react';
import './App.css';
import Principal from './components/Principal';
//import Principal from './components/Principal';

// EXEMPLO 03
// class App extends Component{
//     state={
//       isbn: "978-85-7522-xxx-x", 
//       titulo: "React", 
//       autor: "Maujor"
    
//   }

//   render(){
//     return(
//       <p>
//         ISBN: {this.state.isbn} <br />
//         Título: {this.state.titulo} <br />
//         Autor: {this.state.autor} <br />
//       </p>
//     )
//   }
// }

// EXEMPLO 04
// class App extends Component{
//     state={
//       isbn: "978-85-7522-xxx-x", 
//       titulo: "React", 
//       autor: "Maujor"  
//     }
    
//     componentDidMount(){
//       this.setState({autor:"Mauricio"});
//     }
//   render(){
//     return(
//       <p>
//         ISBN: {this.state.isbn} <br />
//         Título: {this.state.titulo} <br />
//         Autor: {this.state.autor} <br />
//       </p>
//     )
//   }
// }

// EXEMPLO 05

function App(){
  return(
    <div className="card">
      <Principal/>
    </div>
  )
}

export default App;
