import { useState } from "react";
import "./Atributo.css";

type AtributoProps = {
    icone: string;
};

export default function Atributo({ icone }: AtributoProps) {
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
      {icone}{ valor}{"❤️".repeat(valor)}<span className="inativo">{ "❤️".repeat(5 - valor) }</span>
        <button onClick={() => 
            setValor(valor === 5 ? 0 : valor + 1)}>+
        </button>
    </div>
  );
}
