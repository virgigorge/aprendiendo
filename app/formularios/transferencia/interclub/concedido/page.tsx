"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/app/validations/validationSchema";

interface FormData {
  player_name: string;
  date: string;
  date_hasta: string;
  date_option: string;
  dni: string;
  tutor_name: string;
  tutor_dni: string;
  club_cedente: string;
  club_cesionario: string;
  procedure: string;
  freedom: string;
  rti: string;
  organization: string;
}

interface Club {
  [x: string]: string | null | undefined;
  name: string;
}

const inputClass = `uppercase placeholder:normal-case mt-1 block w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-cyan-950 focus:border-cyan-950`;
const sectionClass = `mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:border-cyan-950 focus:ring-cyan-950`;

export default function Concedido() {
  const [clubs, setClubs] = useState<Club[]>([]); // Estado para almacenar los clubes
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log("Formulario enviado", data);
    window.print();
  };

  // Función para cargar los clubes desde la API
  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/clubes/formularios/teams"
        ); // Hace la solicitud a la API
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json(); // Convierte la respuesta a JSON
        setClubs(data); // Guarda los datos en el estado
      } catch (error) {
        console.error("Error fetching clubs:", error);
      } finally {
        setIsLoading(false); // Desactiva el estado de carga
      }
    };

    fetchClubs();
  }, []);

  return (
    <div className="py-10 px-4">
      <h1 className="text-4xl font-bold text-center">CONCEDIDA</h1>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-12 py-10 max-w-6xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-6">
          <h4 className="font-bold text-lg text-center">QUIEN SUSCRIBE:</h4>

          <div>
            <label
              htmlFor="player_name"
              className="block text-sm font-medium text-cyan-950"
            >
              NOMBRE COMPLETO DEL JUGADOR
            </label>
            <input
              id="player_name"
              type="text"
              placeholder="Nombre completo del Jugador"
              className={`${inputClass}
                                ${errors.player_name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              {...register("player_name")}
            />
            {errors.player_name && (
              <p className="text-red-500 py-1 text-xs">
                {errors.player_name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="club"
              className="block text-sm font-medium text-cyan-950"
            >
              NOMBRE DEL CLUB CEDENTE
            </label>
            <select
              id="club"
              className={`${sectionClass}}
                                ${errors.club_cedente ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              {...register("club_cedente")}
              disabled={isLoading}
            >
              <option value="">Seleccione el Club Cedente</option>
              {clubs.map((club) => (
                <option key={club.id} value={club.id ?? ""}>
                  {club.name}
                </option>
              ))}
            </select>
            {errors.club_cedente && (
              <p className="text-red-500 py-1 text-xs">
                {errors.club_cedente.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="club"
              className="block text-sm font-medium text-cyan-950"
            >
              NOMBRE DEL CLUB CESIONARIO
            </label>
            <select
              id="club"
              className={`${sectionClass}}
                                ${errors.club_cesionario ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              {...register("club_cesionario")}
              disabled={isLoading}
            >
              <option value="">Seleccione el Club Cesionario</option>
              {clubs.map((club) => (
                <option key={club.id} value={club.id ?? ""}>
                  {club.name}
                </option>
              ))}
            </select>
            {errors.club_cesionario && (
              <p className="text-red-500 py-1 text-xs">
                {errors.club_cesionario.message}
              </p>
            )}
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-center">
              DATOS E IDENTIDAD:
            </h4>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-cyan-950"
              >
                FECHA DE NACIMIENTO
              </label>
              <input
                id="date"
                type="date"
                placeholder="Fecha de nacimiento del Jugador"
                className={`${sectionClass}}
                            ${errors.date ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
                {...register("date")}
              />
              {errors.date && (
                <p className="text-red-500 py-1 text-xs">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="dni"
                className="block text-sm font-medium text-cyan-950"
              >
                DNI / C.I.
              </label>
              <input
                id="dni"
                type="text"
                placeholder="DNI / C.I."
                className={`${inputClass}}
                                ${errors.dni ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                {...register("dni")}
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.replace(/\D/g, "");
                }}
              />
              {errors.dni && (
                <p className="text-red-500 py-1 text-xs">
                  {errors.dni.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-bold text-lg text-center">TRÁMITE:</h4>

          <div>
            <label
              htmlFor="procedure"
              className="block text-sm font-medium text-cyan-950"
            ></label>
            <select
              id="procedure"
              className={`${sectionClass}}
                                    ${errors.procedure ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              {...register("procedure")}
            >
              <option value="">Seleccione el Trámite</option>
              <option value="DEFINITIVO">DEFINITIVO</option>
              <option value="PRUEBA CON CARGO">A PRUEBA CON CARGO</option>
              <option value="PRUEBA SIN CARGO">A PRUEBA SIN CARGO</option>
            </select>
            {errors.procedure && (
              <p className="text-red-500 py-1 text-xs">
                {errors.procedure.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="freedom"
              className="block text-sm font-medium text-cyan-950"
            ></label>
            <select
              id="freedom"
              className={`${sectionClass}}
                                    ${errors.freedom ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              {...register("freedom")}
            >
              <option value="CON LIBERTAD">CON LIBERTAD DE ACCIÓN</option>
              <option value="SIN LIBERTAD">SIN LIBERTAD DE ACCIÓN</option>
            </select>
            {errors.freedom && (
              <p className="text-red-500 py-1 text-xs">
                {errors.freedom.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="rti"
              className="block text-sm font-medium text-cyan-950"
            ></label>
            <input
              id="rti"
              type="text"
              placeholder="Si es por art. 20 del RTI, indicar inc."
              className={`${inputClass}}
                                    ${errors.rti ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
              {...register("rti")}
            />
            {errors.rti && (
              <p className="text-red-500 py-1 text-xs">{errors.rti.message}</p>
            )}
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-center">
              {" "}
              PLAZO HASTA
              <small className="font-light text-sm"> (SÓLO UNA OPCION): </small>
            </h4>

            <div>
              <label
                htmlFor="date_hasta"
                className="block text-sm font-medium text-cyan-950"
              ></label>
              <input
                id="date_hasta"
                type="date"
                placeholder="Fecha de nacimiento del Jugador"
                className={`${sectionClass}}
                                    ${errors.date ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
                {...register("date_hasta")}
              />
              {errors.date_hasta && (
                <p className="text-red-500 py-1 text-xs">
                  {errors.date_hasta.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="date_option"
                className="block text-sm font-medium text-cyan-950"
              ></label>
              <input
                id="date_option"
                type="text"
                placeholder="O finalización de torneo"
                className={`${inputClass}
                                        ${errors.date_option ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                {...register("date_option")}
              />
              {errors.date_option && (
                <p className="text-red-500 py-1 text-xs">
                  {errors.date_option.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 text-center">
          <button
            type="submit"
            disabled={!isValid}
            className="px-40 py-2 text-sm font-bold text-white bg-cyan-950 rounded-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-950 focus:ring-offset-2"
          >
            IMPRIMIR SOLICITUD
          </button>
        </div>
      </form>
    </div>
  );
}
