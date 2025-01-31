import { z } from "zod";

export const validationSchema = z.object({

  player_name: z
    .string()
    .min(2, "EL NOMBRE DEL JUGADOR ES OBLIGATORIO")
    .max(100, "EL NOMBRE NO DEBE SUPERAR LOS 100 CARACTERES")
    .optional(),

  date: z
    .string()
    .refine(
      (val) => val !== undefined && !isNaN(new Date(val).getTime()) && new Date(val) <= new Date(),
      "DEBE INGRESAR UNA FECHA VÁLIDA")
    .optional(),

  date_hasta: z
  .string()
  .optional(),

  date_option: z
  .string()
  .optional(),

  dni: z
    .string()
    .refine((val) => /^\d{7,8}$/.test(val.toString()), "EL DNI DEBE TENER ENTRE 7 Y 8 DÍGITOS")
    .optional(),

  birth_city: z
    .string()
    .nonempty( "LA CIUDAD DE NACIMIENTO ES OBLIGATORIA" )
    .optional(),

  address: z
    .string()
    .min(1, "EL DOMICILIO ES OBLIGATORIO")
    .optional(),

  club: z
    .string()
    .nonempty("EL NOMBRE DEL CLUB ES OBLIGATORIO")
    .optional(),

  division: z
    .string()
    .nonempty("LA DIVISIÓN ES OBLIGATORIA")
    .optional(),

  tutor_name: z
    .string()
    .nonempty("ESTE CAMPO ES OBLIGATORIO")
    .optional(),

  tutor_dni: z
    .string()
    .nonempty("ESTE CAMPO ES OBLIGATORIO")
    .optional(),

    club_cedente: z
    .string()
    .nonempty("EL NOMBRE DEL CLUB ES OBLIGATORIO")
    .optional(),

    club_cesionario: z
    .string()
    .nonempty("EL NOMBRE DEL CLUB ES OBLIGATORIO")
    .optional(),
    
    procedure: z
    .string()
    .nonempty("ESTE CAMPO ES OBLIGATORIO")
    .optional(),

    freedom: z 
    .string()
    .nonempty("ESTE CAMPO ES OBLIGATORIO")
    .optional(),

    rti: z 
    .string()
    .optional(),

    organization: z
    .string()
    .nonempty("DEBE SELECCIONAR AL MENOS UNA OPCIÓN")
    .optional(),

    dirigido_hacia: z
    .string()
    .nonempty("DEBE SELECCIONAR AL MENOS UNA OPCIÓN")
    .optional(),

    presidente_cedente: z
    .string()
    .min(2, "EL NOMBRE DEL PRESIDENTE ES OBLIGATORIO")
    .max(100, "EL NOMBRE NO DEBE SUPERAR LOS 100 CARACTERES")
    .optional(),

    presidente_cesionario: z
    .string()
    .min(2, "EL NOMBRE DEL PRESIDENTE ES OBLIGATORIO")
    .max(100, "EL NOMBRE NO DEBE SUPERAR LOS 100 CARACTERES")
    .optional(),

    secretario_cedente: z
    .string()
    .min(2, "EL NOMBRE DEL SECRETARIO ES OBLIGATORIO")
    .max(100, "EL NOMBRE NO DEBE SUPERAR LOS 100 CARACTERES")
    .optional(),

    secretario_cesionario: z
    .string()
    .min(2, "EL NOMBRE DEL SECRETARIO ES OBLIGATORIO")
    .max(100, "EL NOMBRE NO DEBE SUPERAR LOS 100 CARACTERES")
    .optional(),

    clausulas_anexadas: z
    .string()
    .optional(),


});
