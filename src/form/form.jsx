export const Form = () => {
    return (
        <>
            <label htmlFor="login-usuario">Login</label>
            <input type="text" name="login-usuario" id="login-usuario"/>
            <label htmlFor="senha-usuario">Senha</label>
            <input type="password" name="senha-usuario" id="senha-usuario" />
            <button type="submit">Entrar</button>
        </>
    );
}