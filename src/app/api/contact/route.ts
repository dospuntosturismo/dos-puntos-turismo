import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'
import ContactoEmail from '@components/ContactoEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  nombre: z.string().min(2, 'Nombre muy corto'),
  phone: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  pais: z.string().optional().nullable(),
  email: z.string().email('Email inválido'),
  comments: z.string().min(1, 'El mensaje es requerido'),
})

// Si prefieres edge, podrías exportar: export const runtime = 'edge'
export async function POST(req: Request) {
  try {
		console.log('entre en la api')
    const body = await req.json()
    const data = schema.parse(body)

    const { data: result, error } = await resend.emails.send({
      from: process.env.MAIL_FROM ?? 'onboarding@resend.dev',
      to: [process.env.MAIL_TO ?? 'hola@tudominio.com'],
      subject: `Nuevo contacto de ${data.nombre}`,
      replyTo: data.email, // para que puedas responder directo al cliente
      text: [
        `Nombre: ${data.nombre}`,
        `Email: ${data.email}`,
        `Tel: ${data.phone ?? '-'}`,
        `Ciudad: ${data.city ?? '-'}`,
        `País: ${data.pais ?? '-'}`,
        '',
        'Mensaje:',
        data.comments,
      ].join('\n'),
      // HTML con React Email (opcional pero recomendado)
      react: ContactoEmail(data),
    })

    if (error) {
      console.error('Resend error', error)
      return NextResponse.json({ ok: false, message: 'No se pudo enviar el email' }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: result?.id })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error('Contact API error', err)
    // Si el error es de zod, muestra mensajes amigables
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const msg = err?.issues ? err.issues.map((i: any) => i.message).join(', ') : 'Error inesperado'
    return NextResponse.json({ ok: false, message: msg }, { status: 400 })
  }
}
