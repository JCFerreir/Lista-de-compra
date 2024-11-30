import React, { useState, useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebaseConfig";  // Importa o 'db' e 'auth' configurados no firebaseConfig.js
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './lista.css';

const Lista = () => {
    const [valorInput, setValorInput] = useState('');
    const [itensLista, setItensLista] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [categoria, setCategoria] = useState('');
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
    const navigate = useNavigate();

    //Para filtrar a categoria
    const itensFiltrados = itensLista.filter(item => {
        if (!categoriaSelecionada) return true; // Se nenhuma categoria está selecionada, exibe todos
        return item.categoria === categoriaSelecionada;
      });

    //Para o usuário sair da conta que está logada
    const handleLogout = async () => {
        try {
            //comando para desconectar
            await signOut(auth);
            console.log('Usuário desconectado com sucesso!');
            navigate('/');
        } catch (error) {
            console.log('Erro ao desconectar do usuário:', error);
        }
    };

    // Monitorar o estado de autenticação do usuário
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);  // Define o usuário autenticado
                console.log("Usuário logado:", user);
            } else {
                setCurrentUser(null);  // Reseta caso não haja usuário autenticado
            }
        });

        return () => unsubscribe();  // Limpa o listener quando o componente é desmontado
    }, []);

    // Carregar os itens do Firestore
    useEffect(() => {
        if(currentUser) {
            const loadItems = async () => {
                const docRef = doc(db, "users", currentUser.uid);
                const docSnap = await getDoc(docRef);

                if(docSnap.exists()) {
                    setItensLista(docSnap.data().itensLista || []);
                }
            };

            loadItems();
        }
    }, [currentUser]);

    // Para atualizar o estado do input
    const handleInputChange = (e) => {
        setValorInput(e.target.value);  // Atualiza o estado com o valor digitado
    };

    //Para atualizar o estado do select
    const handleSelectChange = (e) => {
        setCategoria(e.target.value);
    }

    // Adicionar o item à lista e salvar no Firestore
    const handleAddItem = async () => {

        // Gerando um ID único usando Date.now()
        const newItem = {
            id: Date.now(),  // Adiciona um ID único ao item
            nome: valorInput,
            categoria: categoria
        };
    
        const updatedLista = [...itensLista, newItem];
        setItensLista(updatedLista);  // Adiciona o valor do input à lista
        setValorInput('');  // Limpa o input
        setCategoria('');  // Limpa a categoria
    
        if (currentUser) {
            await setDoc(doc(db, "users", currentUser.uid), {
                itensLista: updatedLista
            });
        }
    };
    

    // Remover o item da lista e salvar no Firestore
    const handleRemoveItem = (idToRemove) => {
        const updatedLista = itensLista.filter(item => item.id !== idToRemove);
        setItensLista(updatedLista);
    
        if (currentUser) {
            // Atualiza no Firestore após a remoção
            setDoc(doc(db, "users", currentUser.uid), {
                itensLista: updatedLista
            });
        }
    };

    return(
        <>

            <button onClick={handleLogout}>Sair da conta</button>

            <label>Filtro:</label>
            <select value={categoriaSelecionada} onChange={(e) => setCategoriaSelecionada(e.target.value)}>
            <option value="Alimento não perecível">Alimento não perecível</option>
            <option value="Alimento perecível" selected>Alimento perecível</option>
            <option value="Produto de limpeza">Produto de limpeza</option>
            <option value="Produto de higiene">Produto de higiene</option>
                {/* Adicione outras categorias conforme necessário */}
            </select>

            <input 
                type="text" 
                value={valorInput}
                onChange={handleInputChange} 
                placeholder="Digite o ítem da sua lista de compra"
            />

            <label>Selecione a categoria do ítem adicionado:</label>
            <select onChange={handleSelectChange}>
            <option value="Alimento não perecível">Alimento não perecível</option>
            <option value="Alimento perecível" selected>Alimento perecível</option>
            <option value="Produto de limpeza">Produto de limpeza</option>
            <option value="Produto de higiene">Produto de higiene</option>
            </select>

            <button onClick={handleAddItem}>Adicionar</button>



            <ul>
                {itensFiltrados.map((item) => (
                    <li key={item.id}>
                        {item.nome} - {item.categoria}
                        <button onClick={() => handleRemoveItem(item.id)}>Deletar</button>
                    </li>
                ))}
            </ul>

            
        </>
    );
};

export default Lista;
