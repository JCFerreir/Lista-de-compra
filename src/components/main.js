import React from "react";
import './main.css';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <div className="background-imagem">
                <section className="conteudo-main">
                    <div className="main">
                        <h1>Entre ou se cadastre-se:</h1>
                        <div className="botoes-main">
                            <Link to="/login">
                                <button>Entrar</button>
                            </Link>
                            <Link to="/cadastro">
                                <button>Cadastrar</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Main;
