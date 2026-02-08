import { defineCollection, z } from 'astro:content';

// 1. Definimos el esquema para la colección "proyectos"
const proyectos = defineCollection({
  type: 'content', // Indica que usamos archivos Markdown (.md)
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    tecnologias: z.array(z.string()), // Un arreglo de strings
    fecha: z.string().optional(),
    rol: z.string().optional(),
    estado: z.string().optional(),
  }),
});

// 2. Exportamos las colecciones para que Astro las reconozca
export const collections = {
  'proyectos': proyectos,
};