import React, { useState } from "react";
import './lista.css';

const Lista = () => {

    const [valorInput, setValorInput] = useState('');
    const [itensLista, setItensLista] = useState([]);

    //para atualizar o estado do input
    const handleInputChange = (e) => {
        setValorInput(e.target.value);  // Atualiza o estado com o valor digitado
      };

    //para adicionar e limpar o dado
    const handleAddItem = () => {
        setItensLista([...itensLista, valorInput]); //adiciona o valor do input a lista
        setValorInput(''); //limpa o input
    }

    const handleRemoveItem = (indexToRemoveItem) => {

    }

    return(
        <>
            <input 
                type="text" 
                value={valorInput}
                onChange={handleInputChange} 
                placeholder="Digite o ítem da sua lista de compra"
            />

            <button onClick={handleAddItem}>Adicionar</button>

            <ul>
                {itensLista.map((item, index) => (
                    <li key={index}>{item}</li> //renderiza os itens da lista
                ))}
            </ul>
        </>
    )
}

export default Lista;