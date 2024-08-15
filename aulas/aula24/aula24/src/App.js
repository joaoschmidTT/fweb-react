
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Calculadora from './components/pagesCalc';
import Contador2 from './components/pageconter';
import Contador from './components/componente';


function App() {
  return (
    <BrowserRouter>
<Routes>
    <Route path ='/' element={<Calculadora />}/>
    <Route path = '/Contador2' element={<Contador2 />}/>
    <Route path = '/Contador' element={<Contador/>}/>
</Routes>
    </BrowserRouter>
  );
}

export default App;

//npm install react-router-dom instalando a biblioteca de rotas