import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate para redirecionar
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Importe o método de criação de usuário
import { auth } from "../firebaseConfig"; // Importe a configuração do Firebase
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import './cadastro.css';

const Cadastro = () => {
    const [nome, setNome] = useState(''); // Estado para o nome
    const [email, setEmail] = useState(''); // Estado para o email
    const [senha, setSenha] = useState(''); // Estado para a senha
    const [confirmaSenha, setConfirmaSenha] = useState(''); // Estado para confirmar senha
    const [displayName, setDisplayName] = useState('');
    const navigate = useNavigate(); // Para redirecionar o usuário

    const handleCadastro = async (e) => {
        e.preventDefault();

        // Verificar se as senhas coincidem
        if (senha !== confirmaSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            // Cria o usuário com email e senha
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            console.log('Usuário criado:', userCredential.user);
            const user = userCredential.user;

            // Redireciona o usuário para a página inicial após o cadastro
            navigate('/lista');

            // Atualiza o displayName do usuário
            await updateProfile(user, {
                displayName: nome  // Definir o nome que o usuário inseriu
            });

        } catch (error) {
            console.error('Erro ao fazer cadastro:', error);
        }
    };

    return (
        <section className="conteudo-login">
            <form onSubmit={handleCadastro}>
                <fieldset>

                <Link to="/">
                        <FontAwesomeIcon icon={faHouse} />
                </Link>

                    <legend>Faça o cadastro</legend>

                    <p>
                        <label htmlFor="nome-login">Seu nome:</label>
                        <input 
                            type="text" 
                            name="nome-login" 
                            id="nome-login" 
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)} 
                            placeholder="Seu nome" 
                        />
                    </p>

                    <p>
                        <label htmlFor="email-login">Seu email:</label>
                        <input 
                            type="email" 
                            name="email-login" 
                            id="email-login" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Seu email" 
                        />
                    </p>

                    <p>
                        <label htmlFor="senha-login">Sua senha:</label>
                        <input 
                            type="password" 
                            name="senha-login" 
                            id="senha-login" 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                            placeholder="Sua senha" 
                        />
                    </p>

                    <p>
                        <label htmlFor="ConSenha-login">Confirme sua senha:</label>
                        <input 
                            type="password" 
                            name="ConSenha-login" 
                            id="ConSenha-login" 
                            value={confirmaSenha} 
                            onChange={(e) => setConfirmaSenha(e.target.value)} 
                            placeholder="Confirme sua senha" 
                        />
                    </p>

                    <p>
                        <button type="submit" className="btn btn-outline-success">Confirme</button>
                    </p>

                    <p>Já tem uma conta? <Link to="/login">Entre</Link></p>

                </fieldset>
            </form>
        </section>
    );
};

export default Cadastro;
