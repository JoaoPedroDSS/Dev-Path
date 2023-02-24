import{useState} from 'react'
function Condicional(){
    function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email)
    console.log(userEmail)
}
function limparEmail(e){
    e.preventDefault()
    setUserEmail('')
    
}
    const[email,setEmail] = useState()
    const[userEmail, setUserEmail] = useState()
    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
                {userEmail &&(
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick="limparEmail">Limpar Email</button>
                    </div>
                    
                )}
            </form>
            
        </div>
    )
}
export default Condicional