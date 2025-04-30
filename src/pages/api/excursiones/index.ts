// pages/api/crearUsuario.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../lib/mongod' // <-- A segurate que el path sea correcto


// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).json({ message: 'La API está funcionando 🚀' });
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido. Solo POST.' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('dospuntosdb'); // <- Nombre de tu base
    const collection = db.collection('excursiones'); // <- Nombre de tu colección

    const { titulo, descripcion, info, image, imageInfo } = req.body;

    if (!titulo || !descripcion) {
      return res.status(400).json({ message: 'Faltan datos: titulo o descripcion.' });
    }

    const nuevaExcursion = {
      titulo,
      descripcion,
			info,
			image,
			imageInfo,
      creadoEn: new Date(),
    };

    const resultado = await collection.insertOne(nuevaExcursion);

    res.status(201).json({
      message: 'Excursion creada exitosamente',
      id: resultado.insertedId,
    });
  } catch (error) {
    console.error('Error creando usuario:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
}
