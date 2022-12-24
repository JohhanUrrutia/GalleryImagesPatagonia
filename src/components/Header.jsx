const Header = (props) => {
    return (
        <div className="text-center">
            <h1>{props.titulo}</h1>
            <h3 className="display-6">{props.autor}</h3>
        </div>
        
    )
}

export default Header