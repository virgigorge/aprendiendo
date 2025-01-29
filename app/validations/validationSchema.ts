import { z } from "zod";

export const validationSchema = z.object({

  player_name: z
    .string()
    .min(2, "EL NOMBRE DEL JUGADOR ES OBLIGATORIO")
    .max(100, "EL NOMBRE NO DEBE SUPERAR LOS 100 CARACTERES"),

  date: z
    .string()
    .refine(
      (val) => !isNaN(new Date(val).getTime()) && new Date(val) <= new Date(),
      "DEBE INGRESAR UNA FECHA VÁLIDA"
    ),

  dni: z
    .string()
    .regex(/^\d{7,8}$/, "EL DNI DEBE TENER ENTRE 7 Y 8 DÍGITOS"),

  birth_city: z
    .string()
    .min(1, "LA CIUDAD DE NACIMIENTO ES OBLIGATORIA"),

  address: z
    .string()
    .min(1, "EL DOMICILIO ES OBLIGATORIO"),

  club: z
    .string()
    .min(1, "EL NOMBRE DEL CLUB ES OBLIGATORIO"),

  division: z
    .string()
    .min(1, "LA DIVISIÓN ES OBLIGATORIA"),

  tutor_name: z
    .string()
    .optional(),

  tutor_dni: z
    .string()
    .optional(),
});
