import './components.css';

import { useState } from "react";

function Form(){ 
    const [nome, setnome] = useState('') //criando o array de nome e armazenando em use stade
       const [mensagem, setMensagem] = useState('') //aparecendo a mensagem
        const mudaNome = (event) => {  //evento pra criar outro nome
            setnome(event.target.value); 
        }
const clicaEnter = (event) =>{  //evento de clicar
    event.preventDefault();      //pra ficar na tela
    setMensagem(`bem vindo:${nome}`) //exibindo a mesnagem com nome

}
return (
    <div>
        <form onSubmit={clicaEnter}>
            <input id="nome"
            type="text"
            value={nome}                                
            placeholder="digite seu nome"
            onChange={mudaNome}  
            />           
         <button type="submit">enviar</button>
        </form>
        {<p>{mensagem}</p>}



    </div>
)
}

export default Form;