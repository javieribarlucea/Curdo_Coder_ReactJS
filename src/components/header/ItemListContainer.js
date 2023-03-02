const ItemListContainer=(props)=>{

    return(

        <ul>
            <li><button>{props.itemUno}</button></li>
            <li><button>{props.itemDos}</button></li>
            <li><button>{props.itemTres}</button></li>
            <li><button>{props.itemCuatro}</button></li>
        </ul>
    )
}

export default ItemListContainer;