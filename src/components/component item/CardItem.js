import Image from "./Image";
import "../../style/cardItem.css"
import Description from "./Description";
import ButtonAddCart from "./ButtonAddCart";
import Buttondetalles from "./Buttondetalles";
import Imgprueba from "../../img/menu.png"

const CardItem=() =>{
    return(

        <div className="cardItems">
            <Image Image={Imgprueba}/>
            <Description/>
            <div className="buttons">
                <Buttondetalles/>
                <ButtonAddCart/>

            </div>
            
        </div>
    )
}

export default CardItem;