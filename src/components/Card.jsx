// Tarjeta de producto reutilizable
// Props: titulo, imagen, descripcion, alt
function Card({ titulo, imagen, descripcion, alt }) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt={alt} />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <a href="#contacto" className="btn btn-secundario">Pedir</a>
    </div>
  )
}

export default Card