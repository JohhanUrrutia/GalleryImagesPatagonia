const Card = (props) => {
    return (
        <>
        <div className="">
            <div className="card card-style m-2 bg-dark">
                <img src={props.rutaImagen}/>
                <div className="card-body">
                    <h5 className="card-title color-text-change">{props.titulo}</h5>
                    <p className="card-text color-text-change">{props.descripcion}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card