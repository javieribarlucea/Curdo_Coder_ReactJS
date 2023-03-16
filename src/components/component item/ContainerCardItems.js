import CardItem from "./CardItem"
import fetchSimution from "../../utils/promisa"
import product from "../../utils/product"
import { useState,useEffect } from "react"

const ContainerCardItems= ()=>{
        const[datos, setDatos]=useState([]);

        useEffect(()=>{
        fetchSimution(product,3000)
        .then(resp=> console.log(resp))
        .catch(error=>console.log(error))
},[])
 return (
        <>
                {
                        datos.map(()=>{
                                 <CardItem
                                        key={product.id}
                                        imagen={product.imgeProduct}
                                        title={product.title}
                                        cantidad={product.stock}
                                        precio= {product.price}
                                 />
                        })
                }
        </>
        )
}
export default ContainerCardItems