
import { Link } from 'react-router-dom';


import { useState, useMemo } from "react";



function Calculadora(){
    const [numeoro1,setNumero1] = useState(0)  //crianndo funçao para ramazenar numero
    const [numeoro2,setNumero2] = useState(0)

    const soma = useMemo(()=>{
        console.log('calculadora a soma');return numeoro1+numeoro2;},[numeoro1 , numeoro2]);  
    

        return (
            <div>
                <input id="calculadora1"  type="number" value={numeoro1} onChange={(e)=> setNumero1 //criando um input pra armazenar o priemro numero 
                (parseInt(e.target.value))}/>
                <input id="calculadora2" type="number" value={numeoro2} onChange={(e)=> setNumero2
                (parseInt(e.target.value))}/>
                <p id="paragrafo">soma:{soma}</p>

                <Link to='/Contador2'>contador</Link>
            </div>
        )
}

export default Calculadora

