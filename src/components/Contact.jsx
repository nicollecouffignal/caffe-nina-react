import { useState } from 'react'

// Valores iniciales del formulario (también se usan para resetear)
const estadoInicial = {
  nombre: '',
  email: '',
  telefono: '',
  motivo: 'pedido',
  origen: 'instagram',
  newsletter: false,
  mensaje: '',
}

function Contact() {
  // Estado que guarda todos los datos del formulario
  const [formData, setFormData] = useState(estadoInicial)

  // Se ejecuta cada vez que el usuario cambia un campo
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const nuevoValor = type === 'checkbox' ? checked : value

    console.log(`Cambió el campo "${name}":`, nuevoValor)
    setFormData({ ...formData, [name]: nuevoValor })
  }

  // Envío: evita que se recargue la página y muestra los datos en consola
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
  }

  // Limpiar: vuelve el formulario a su estado inicial
  const handleReset = () => {
    console.log('Formulario reseteado')
    setFormData(estadoInicial)
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        placeholder="Tu nombre"
        value={formData.nombre}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="tu@email.com"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="telefono">Teléfono</label>
      <input
        type="tel"
        id="telefono"
        name="telefono"
        placeholder="341 000 0000"
        value={formData.telefono}
        onChange={handleChange}
      />

      <label htmlFor="motivo">¿Qué necesitas?</label>
      <select
        id="motivo"
        name="motivo"
        value={formData.motivo}
        onChange={handleChange}
      >
        <option value="pedido">Pedido personalizado</option>
        <option value="mayorista">Compra mayorista</option>
        <option value="trabajo">Trabajar con nosotros</option>
      </select>

      <p>¿Cómo nos conociste?</p>
      <label className="opcion">
        <input
          type="radio"
          name="origen"
          value="instagram"
          checked={formData.origen === 'instagram'}
          onChange={handleChange}
        />{' '}
        Instagram
      </label>
      <label className="opcion">
        <input
          type="radio"
          name="origen"
          value="recomendacion"
          checked={formData.origen === 'recomendacion'}
          onChange={handleChange}
        />{' '}
        Recomendación
      </label>
      <label className="opcion">
        <input
          type="radio"
          name="origen"
          value="google"
          checked={formData.origen === 'google'}
          onChange={handleChange}
        />{' '}
        Google
      </label>

      <label className="opcion">
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
        />{' '}
        Quiero recibir novedades
      </label>

      <label htmlFor="mensaje">Mensaje</label>
      <textarea
        id="mensaje"
        name="mensaje"
        rows="4"
        placeholder="Contanos qué necesitás"
        value={formData.mensaje}
        onChange={handleChange}
      ></textarea>

      <div className="form-botones">
        <button type="submit" className="btn">Enviar</button>
        <button type="button" className="btn btn-secundario" onClick={handleReset}>
          Limpiar
        </button>
      </div>
    </form>
  )
}

export default Contact