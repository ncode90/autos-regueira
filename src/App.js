import logo from './logo.svg'
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainter'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="¡Saludos!"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Autos Regueira</p>
      </header>
    </div>
  );
}

export default App;
