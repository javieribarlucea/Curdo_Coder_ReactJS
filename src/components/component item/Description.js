const Description =(props) =>{
    return(
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>
            <div className="description">
                 <span className="descriptionTitle">Descriptio </span>
                 <p className="parrafo"></p>
                    {props.parrafo}
            </div>

            <span className="cant">
                    cantidas:{props.cantidad}
            </span>

            <span className="precio">
                    {props.precio}
            </span>
        </div>
    )
}

export default Description;