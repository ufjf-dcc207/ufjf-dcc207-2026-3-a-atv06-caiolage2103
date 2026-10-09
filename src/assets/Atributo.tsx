import { useState } from "react";
import "./Atributo.css";

export default function Atributo() {
  const [ valor, setValor ] = useState<number>(0);
  let coracoes = " ";
  for (let i=0; i<5; i++){
    if(i<valor){
        coracoes += "❤️"
    }else{
        coracoes += "🤍"
    }
  }
  return (
    <div className="atributo">
      {valor}{"❤️".repeat(valor)}<span className="inativo">{ "❤️".repeat(5 - valor) }</span>
        <button onClick={() => 
            setValor(valor === 5 ? 0 : valor + 1)}>+
        </button>
    </div>
  );
}
