import Item from "./Item"
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca ="Forgiato" ano_lançamento={1955}/>
                <li><Item/></li>
            </ul>
        </>
    )
}
export default List