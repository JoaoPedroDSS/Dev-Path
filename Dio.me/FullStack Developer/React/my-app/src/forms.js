import {useState} from 'react'
function Formulário(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name);
        console.log('Cadastrou o usuário!');
        console.log(password);
    }
    const[name, setName] = useState()
    const[password, setPassword] = useState()

    return(
        <div>
            <h1>Cadastre o usuário</h1>
            <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text"
                placeholder="Digite seu nome"
                onChange={(e)=>setName(e.target.value)}></input>
            </div>
           
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password"
                  id="password"
                  placeholder="Digite a sua senha"
                  name="password"
                  onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div>
                <input type="submit" value="Cadastrar"></input>
            </div>
            </form>
        </div>
    )
}
export default Formulário