import React from "react";
import './cadastro.css';

const Cadastro = () => {
    return(
        <>
             <section className="conteudo-login">
                <form>
                    <fieldset>
                        <legend>Faça o cadastro</legend>

                        <p>
                            <label for="nome-login">Seu nome:</label>
                            <input type="name" name="nome-login" id="nome-login" value="" />
                        </p>

                        <p>
                            <label for="email-login">Seu email:</label>
                            <input type="email" name="email-login" id="email-login" value="" />
                        </p>

                        <p>
                            <label for="senha-login">Sua senha:</label>
                            <input type="password" name="senha-login" id="senha-login" value="" />
                        </p>

                        <p>
                            <label for="ConSenha-login">Confirme sua senha:</label>
                            <input type="password" name="ConSenha-login" id="ConSenha-login" value="" />
                        </p>

                        <p>
                            <button type="button" class="btn btn-outline-success">Confirme</button>
                        </p>
                        
                    </fieldset>
                </form>
            </section>
        </>
    )
}

export default Cadastro;