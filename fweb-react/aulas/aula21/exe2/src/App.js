
import './App.css';
import Titulo from './components/componentes';
import Input1 from './components/componetes3';

import Senha from './components/componentes7';
import Usuario from './components/componentes6';
import Butao from './components/componentes5';


function App() {
  return (

    <div className="conteiner">      
        <div id="telaprincipal">

          <Titulo id= "login"/>

          <div id="tela2">

          <Usuario name = "usuario"/>
          <Input1/>
          <Senha name ="Passoword"/>
          <Input1/>
          </div>

    <Butao>

    </Butao>

        </div>
     
    </div>
  );
}

export default App;
