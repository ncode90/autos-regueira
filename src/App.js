import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainter'
import ItemDetailContainter from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
          <Router>
            <NavBar/>
            <Switch>
              <Route  exact path="/"><ItemListContainer greeting="¡Bienvenidos al Sitio!"/></Route>
              <Route  exact path="/category/:categoryId"><ItemListContainer/></Route>
              <Route  exact path="/item/:itemId"><ItemDetailContainter/></Route>
            </Switch>
          </Router>
      </div> 
  )
}

export default App