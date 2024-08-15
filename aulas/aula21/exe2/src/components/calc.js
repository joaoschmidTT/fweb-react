import Usuario from './componentes6';
import Botao from './componentes5';
import Titulo from './componentes';
import Input1 from './componetes3';
export default function Calc() {
    return (
  
      <div className="conteiner">
        <div id="telaprincipal">
  
          <Titulo id="login" />
  
          <div id="tela2">
  
  
  
  
            <Usuario name="Usuário" />
            <Input1 type="text" id="inputLogin" />
            <Usuario name="Senha" />
            <Input1 type="password" id="inputPassword" />
          </div>
  
          <Botao>
  
          </Botao>
  
        </div>
  
      </div>
    );
  }