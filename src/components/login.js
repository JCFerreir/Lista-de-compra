import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom"; 
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('Usuário logado:', userCredential.user);
            navigate('/lista');
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <>
            <section className="conteudo-login">
                <form onSubmit={handleLogin}>
                    <fieldset>
                        <legend>Faça o login</legend>

                        <p>
                            <label htmlFor="email-login">Seu email:</label>
                            <input 
                                type="email" 
                                name="email-login" 
                                id="email-login" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="email"/>
                        </p>

                        <p>
                            <label htmlFor="senha-login">Sua senha:</label>
                            <input 
                                type="password" 
                                name="senha-login" 
                                id="senha-login" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="password"/>
                        </p>

                        <p>
                            <button type="submit" className="btn btn-outline-success">Confirme</button>
                        </p>

                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default Login;
