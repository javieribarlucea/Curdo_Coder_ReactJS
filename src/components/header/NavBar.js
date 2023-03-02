import logo_bella_clara from "./brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
import Brand from "./brand";
const NavBar =()=>{

    return(

        <header>

            <div className="containerBrand">
                <Brand/>

            </div>
            <nav className="containerItemList">
                <ItemListContainer
                    itemUno="Rubores"
                    itemDos="Sombras"
                    itemTres="Skincare"
                    itemCuatro="Brochas"
                />

            </nav>

            <div className="containerCart">
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar;