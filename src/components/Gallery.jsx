// Galería de imágenes
// Props: imagenes (array de { src, alt })
function Gallery({ imagenes }) {
  return (
    <div className="galeria-flex">
      {imagenes.map((imagen) => (
        <img key={imagen.alt} src={imagen.src} alt={imagen.alt} />
      ))}
    </div>
  )
}

export default Gallery