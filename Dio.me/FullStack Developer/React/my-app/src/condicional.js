import{useState} from 'react'

function condicional(){
    function enviarEmail(e){
        e.preventDefault();
        console.log('Testando')
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Insira seu e-mail..."/>
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
            </form>
           
        </div>
    )
}
export default condicional