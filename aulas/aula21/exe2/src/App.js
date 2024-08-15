
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contador2 from './components/calculadora';
import Calc from './components/calc';



function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Calc />} />
        <Route path='/sucesso' element={<Contador2 />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
