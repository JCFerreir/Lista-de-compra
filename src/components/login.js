import React from "react";
import './login.css';

const Login = () => {
    return(
        <>
            <section className="conteudo-login">
            <form>
                <fieldset>
                    <legend>Faça o login</legend>

                    <p>
                        <label for="email-login">Seu email:</label>
                        <input type="email" name="email-login" id="email-login" value="" />
                    </p>

                    <p>
                        <label for="senha-login">Sua senha:</label>
                        <input type="password" name="senha-login" id="senha-login" value="" />
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

export default Login;