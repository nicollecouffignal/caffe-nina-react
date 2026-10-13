import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

// Datos del menú y de las redes (se pasan como props)
const opcionesMenu = [
  { nombre: 'Inicio', url: '#inicio' },
  { nombre: 'Productos', url: '#productos' },
  { nombre: 'Galería', url: '#galeria' },
  { nombre: 'Contacto', url: '#contacto' },
]

const redes = [
  { icono: 'fa-brands fa-instagram', url: '#' },
  { icono: 'fa-brands fa-facebook', url: '#' },
  { icono: 'fa-brands fa-whatsapp', url: '#' },
]

// Estructura general de la app: Navbar fijo, contenido de la ruta y Footer fijo
function Layout() {
  return (
    <>
      <Navbar logo="Caffè Nina" opciones={opcionesMenu} />

      <main className="page-content">
        {/* Acá se renderiza la página que corresponde a la ruta */}
        <Outlet />
      </main>

      <Footer texto="© 2026 Caffè Nina" redes={redes} />
    </>
  )
}

export default Layout