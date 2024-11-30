import React from "react";
import './main.css';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <section className="conteudo-main">
                <div className="main">
                    <div className="logo"></div>
                    <div className="conteudo-autenticacao">
                        <h1 className="titulo-autenticacao">Entre ou se cadastre-se:</h1>
                        <div className="metodo-autenticacao">
                            <Link to="/login">
                                <button className="botoes-autenticacao">Entrar</button>
                            </Link>
                            <Link to="/cadastro">
                                <button className="botoes-autenticacao">Cadastrar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Main;
