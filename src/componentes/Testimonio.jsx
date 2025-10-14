import React from "react";
import "../hojas-de-estilo/Testimonio.css"

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="Imgenes-testimonio"
        src={require(`../imagenes/${props.imagen}.png`)}
        alt="Foto del testimonio" />
      <div className="contenedor-texto">
        <p className="nombre-pais">
          <strong>
            {props.nombre}
          </strong>
          en {props.pais}</p>
        <p className="cargo-testimonio">
          {props.cargo} en
          <strong>
            {props.empresa}
          </strong>
        </p>
        <p className="text-testimonio">
          "{props.testimonio}"
        </p>
      </div>

    </div>
  );
}

export default Testimonio;