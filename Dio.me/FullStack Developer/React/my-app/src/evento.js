
function Evento(){
    function meuEvento(){
    var iten=document.getElementById('item')
    iten.innerHTML= 'Olha ele aqui'
    }
    return(
    <div>
        <p>Clique para ativar um evento:</p>
        <button onClick={meuEvento}>Ativar</button>
        <li id={'item'}></li>
    </div>
    )
}
export default Evento
