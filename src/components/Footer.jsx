// Pie de página reutilizable
// Props: texto (string), redes (array de { icono, url })
function Footer({ texto, redes }) {
  return (
    <footer className="main-footer">
      <div className="contenedor footer-flex">
        <p>{texto}</p>

        <div className="redes">
          {redes.map((red) => (
            <a key={red.icono} href={red.url}>
              <i className={red.icono}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer