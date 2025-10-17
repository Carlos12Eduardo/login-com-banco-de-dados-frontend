import { useEffect, useRef, useState } from "react";

export const Form = () => {
    const loginUsuario = useRef("");
    const senhaUsuario = useRef("");
    const [clicou, setClicou] = useState(0);
    const hundleSumbit = () => {
        setClicou(clicou + 1);
        console.log(clicou);
        console.log(loginUsuario.current.value);
        console.log(senhaUsuario.current.value);
    }
    useEffect(() =>{
        const autenticarUsuario = async () => {
            const consulta = await fetch("http://localhost:3000/autenticar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "login": loginUsuario.current.value,
                    "senha": senhaUsuario.current.value
                })
            });
            const resposta = await consulta.json();
            // console.log(resposta);
            console.log(consulta);
            // if(consulta.status == 200) 
            alert(resposta.mensagem);
        };
        autenticarUsuario();
    },[clicou]);
    return (
        <>
            <label htmlFor="login-usuario">Login</label>
            <input type="text" name="login-usuario" id="login-usuario" ref={loginUsuario}/>
            <label htmlFor="senha-usuario">Senha</label>
            <input type="password" name="senha-usuario" id="senha-usuario" ref={senhaUsuario}/>
            <button type="submit" onClick={hundleSumbit}>Entrar</button>
        </>
    );
}