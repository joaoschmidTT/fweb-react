
import React,  {useState, useMemo ,useCallback} from "react";

function Items(){
    const [contador, setContador] = useState (0)
    const [items, setItems] = useState([
        {id:1, nome:'produto A', preco:10},
        {id:2, nome:'produto B', preco:20},
        {id:3, nome:'produto C', preco:15},
        {id:4, nome:'produto D', preco:5},
    ])

    const clicou = useCallback(() =>{setContador(contador+1)}, [contador])
    const filtroItem = useMemo(() =>{return items.filter(item =>item.preco>10)},
    [items])
    return(
    <div>
        <p>{contador}</p>          

        <button onClick={clicou}>incrementar</button>
        <ul>
            {filtroItem.map(item=>(<li key={item.id}>{item.nome}</li>))}
        </ul>
    </div>
    )
}

export default Items