import React from "react";
import '../hojas-de-estilos/Testimonio.css'


function Testimonio(props){
    return (

        <div className="contenedor-testimonio">
            <img src={require(`../imagenes/testimonio_${props.imagen}`)} className="imagen-testimonio" ></img>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><b>{props.nombre}</b>, {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
                <p className="texto-testimonio">{props.testimonio}</p>


            </div>
        </div>
    );
}

export default Testimonio;