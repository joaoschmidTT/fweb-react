import logo from './logo.svg';
import './App.css';
import Welcome from './componente1';
import Test2 from './componente2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div>
        <p>
          web site de imagens sobre o antigo egito
        </p>
        <img src="egito.jpg"></img>

       <Welcome name = "rebeca" />

       <Test2 text = "lalalal@gmail.com" />


       </div>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
