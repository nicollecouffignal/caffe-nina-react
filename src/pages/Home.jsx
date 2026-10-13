import Card from '../components/Card'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

// Imágenes (se importan desde src/assets)
import granoImg from '../assets/producto-grano.jpg'
import espressoImg from '../assets/producto-espresso.jpg'
import coldbrewImg from '../assets/producto-coldbrew.jpg'
import galeria1 from '../assets/galeria-1.jpg'
import galeria2 from '../assets/galeria-2.jpg'
import galeria3 from '../assets/galeria-3.jpg'
import galeria4 from '../assets/galeria-4.jpg'
import galeria5 from '../assets/galeria-5.jpg'
import galeria6 from '../assets/galeria-6.jpg'
import galeria7 from '../assets/galeria-7.jpg'
import galeria8 from '../assets/galeria-8.jpg'

// Datos de los productos
const productos = [
  {
    titulo: 'Café en grano',
    imagen: granoImg,
    alt: 'Café en grano',
    descripcion: 'Tueste claro, ideal para filtrado en casa.',
  },
  {
    titulo: 'Espresso',
    imagen: espressoImg,
    alt: 'Café espresso',
    descripcion: 'Tueste medio, cuerpo intenso y notas a cacao.',
  },
  {
    titulo: 'Cold Brew',
    imagen: coldbrewImg,
    alt: 'Cold brew',
    descripcion: 'Infusión en frío durante 12 horas. Suave y dulce.',
  },
]

// Datos de la galería
const imagenesGaleria = [
  { src: galeria1, alt: 'Barista preparando café' },
  { src: galeria2, alt: 'Granos de café verde' },
  { src: galeria3, alt: 'Capuchino con arte latte' },
  { src: galeria4, alt: 'Interior de la cafetería' },
  { src: galeria5, alt: 'Café filtrado' },
  { src: galeria6, alt: 'Bolsas de café tostado' },
  { src: galeria7, alt: 'Plantación de café' },
  { src: galeria8, alt: 'Taza de café servida' },
]

function Home() {
  return (
    <>
      {/* SECCIÓN HERO */}
      <section id="inicio" className="hero">
        <div className="hero-texto">
          <h1>Caffè Nina</h1>
          <p>Date un respiro, bien cargado.</p>
          <a href="#productos" className="btn">Ver productos</a>
        </div>
      </section>

      {/* SECCIÓN PRODUCTOS */}
      <section id="productos" className="productos">
        <div className="contenedor">
          <h2>Nuestro café</h2>
          <div className="tarjetas">
            {productos.map((producto) => (
              <Card
                key={producto.titulo}
                titulo={producto.titulo}
                imagen={producto.imagen}
                alt={producto.alt}
                descripcion={producto.descripcion}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN GALERÍA */}
      <section id="galeria" className="galeria">
        <div className="contenedor">
          <h2>Galería</h2>
          <Gallery imagenes={imagenesGaleria} />
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="contacto">
        <div className="contenedor">
          <h2>Contacto</h2>
          <Contact />
        </div>
      </section>
    </>
  )
}

export default Home