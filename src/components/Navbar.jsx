// Barra de navegación reutilizable
// Props: logo (string), opciones (array de { nombre, url })
function Navbar({ logo, opciones }) {
  return (
    <header className="main-header">
      <div className="contenedor header-flex">
        <span className="logo">{logo}</span>

        <nav className="menu">
          {opciones.map((opcion) => (
            <a key={opcion.nombre} href={opcion.url}>
              {opcion.nombre}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar