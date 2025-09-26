import * as React from 'react'

type Props = {
  nombre: string
  email: string
  phone?: string | null
  city?: string | null
  pais?: string | null
  comments: string
}

export default function ContactoEmail({ nombre, email, phone, city, pais, comments }: Props) {
  const item = (label: string, value?: string | null) => (
    <p style={{ margin: '4px 0' }}>
      <strong>{label}:</strong> {value || '-'}
    </p>
  )

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#111', padding: 16 }}>
      <h2 style={{ margin: '0 0 12px' }}>Nuevo mensaje de contacto</h2>
      {item('Nombre', nombre)}
      {item('Email', email)}
      {item('Teléfono', phone)}
      {item('Ciudad', city)}
      {item('País', pais)}
      <hr style={{ margin: '12px 0' }} />
      <p style={{ margin: '8px 0' }}><strong>Mensaje:</strong></p>
      <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{comments}</p>
    </div>
  )
}
