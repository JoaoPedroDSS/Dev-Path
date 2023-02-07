import Button from "./Componentes formulário/Button"

function Evento(){
    function meuEvento(){
   console.log("Ativando primeiro evento");
    }
    return(
    <div>
        <p>Clique para ativar um evento:</p>
        <Button event={meuEvento} text="Primeiro"/>
        
        <li id={'item'}></li>
    </div>
    )
} 
export default Evento
