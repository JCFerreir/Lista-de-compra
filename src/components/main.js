import React from "react";
import './main.css';

const Login = () => {
    return(
        <>
        <div className="background-imagem">
            <section className="conteudo-main">
                <div className="main">
                    <h1>Entre ou se cadastre-se:</h1>
                    <div className="botoes-main">
                        <button>Entrar</button>
                        <button>Cadastrar</button>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default Login;