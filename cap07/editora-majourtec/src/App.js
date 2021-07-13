import React,{Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Topo from './components/Topo';
import Home from './components/Home';
import Catalogo from './components/Catalogo';
import NotFound from './components/NotFound';
import Rodape from './components/Rodape';
import "./index.css";
import Frontend from './components/Frontend';
import Programacao from './components/Programacao';
import Design from './components/Design'

class App extends Component {
  render(){
    return (
      <Router>
        <>
        <Topo/>
        <Switch>
          <Route exact path="/" render={Home}/>
          <Route exact path="/frontend" render={()=><Frontend/>}/>
          <Route exact path="/programacao" render={()=><Programacao/>}/>
          <Route exact path="/design" render={()=><Design/>}/>
          <Route exact path="/catalogo" render={()=><Catalogo/>}/>
          <Route component={NotFound}/>
        </Switch>
        <Rodape/>
        </>
      </Router>
    );
  }
}

export default App;
