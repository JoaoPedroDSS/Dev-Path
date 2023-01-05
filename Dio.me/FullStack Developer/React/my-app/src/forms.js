function Formulário(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log('Cadastrou o usuário!');
        
    }
    return(
        <div>
            <h1>Cadastre o usuário</h1>
            <form onSubmit={cadastrarUsuario}>
            <div>
                <input type="text" placeholder="Digite seu nome"></input>
            </div>
            <div>
                <input type="submit" value="Cadastrar"></input>
            </div>
            
            </form>
        </div>
    )
}
export default Formulário