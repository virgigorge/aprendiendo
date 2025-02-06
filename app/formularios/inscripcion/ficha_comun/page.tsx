"use client";
import { ChangeEvent, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/app/validations/validationSchema";

interface FormData {
  player_name: string;
  date: string;
  dni: string;
  birth_city: string;
  address: string;
  tutor_name: string;
  tutor_dni: string;
  club: string;
  division?: string;
}

interface Club {
  [x: string]: string | null | undefined;
  name: string;
}

const inputClass = `uppercase placeholder:normal-case mt-1 block w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-cyan-950 focus:border-cyan-950`;
const sectionClass = `mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:border-cyan-950 focus:ring-cyan-950`;

export default function Ficha_Comun() {
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
  const [isMinor, setIsMinor] = useState(false);
  const [clubs, setClubs] = useState<Club[]>([]); // Estado para almacenar los clubes
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    window.print();
  };

  const birthDate = watch("date");

  useEffect(() => {
    if (birthDate) {
      const today = new Date();
      const birth = new Date(birthDate);
      const age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      const isUnder18 = age < 18 || (age === 18 && monthDiff < 0);
      setIsMinor(isUnder18);
    } else {
      setIsMinor(false);
    }
  }, [birthDate]);

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

  function handleSingleCheckboxSelection(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSelectedCheckbox(value === selectedCheckbox ? null : value);
  }

  return (
    <div className="items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-center">
        {" "}
        SOLICITUD DE INSCRIPCIÓN{" "}
      </h1>

      <br />
      <br />

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-10 py-4 max-w-4xl mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-4">
          <h4 className="font-bold text-lg text-center mb-4">
            QUIEN SUSCRIBE:
          </h4>

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
              className={`${inputClass}}
                    ${errors.player_name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
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
              <p className="text-red-500 py-1 text-xs">{errors.date.message}</p>
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
                    ${errors.dni ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
              {...register("dni")}
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                target.value = target.value.replace(/\D/g, "");
              }}
            />
            {errors.dni && (
              <p className="text-red-500 py-1 text-xs">{errors.dni.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="birth_city"
              className="block text-sm font-medium text-cyan-950"
            >
              CIUDAD DE NACIMIENTO
            </label>
            <input
              id="birth_city"
              type="text"
              placeholder="Ciudad de nacimiento"
              className={`${inputClass}}
                    ${errors.birth_city ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
              {...register("birth_city")}
            />
            {errors.birth_city && (
              <p className="text-red-500 py-1 text-xs">
                {errors.birth_city.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-cyan-950"
            >
              DOMICILIO
            </label>
            <input
              id="address"
              type="text"
              placeholder="Domicilio"
              className={`${inputClass}}
                    ${errors.address ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
              {...register("address")}
            />
            {errors.address && (
              <p className="text-red-500 py-1 text-xs">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-lg text-center mb-4">
            DATOS DEL CLUB:
          </h4>

          <div>
            <label
              htmlFor="Selecciona un club"
              className="block text-sm font-medium"
            >
              NOMBRE DEL CLUB
            </label>
            <select
              id="club"
              className={`${sectionClass}}
                    ${errors.club ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
              {...register("club")}
              disabled={isLoading}
            >
              <option value="">Seleccione el Club</option>
              {clubs.map((club) => (
                <option key={club.id} value={club.id ?? ""}>
                  {club.name}
                </option>
              ))}
            </select>
            {errors.club && (
              <p className="text-red-500 py-1 text-xs">{errors.club.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="division"
              className="block text-sm font-medium text-cyan-950"
            >
              DIVISIÓN
            </label>
            <select
              id="division"
              className={`${sectionClass}}
                    ${errors.division ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
              {...register("division")}
            >
              <option value="">Seleccione la División</option>
              <option value="PRIMERA">PRIMERA DIVISIÓN</option>
              <option value="RESERVA">RESERVA</option>
              <option value="INFANTIL">INFANTIL</option>
            </select>
            {errors.division && (
              <p className="text-red-500 py-1 text-xs">
                {errors.division.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-lg text-center mb-4 py-1">
            AUTORIZACIÓN:{" "}
            <small className="font-light text-xs">
              (SÓLO SI ES MENOR DE EDAD)
            </small>
          </h4>

          {["Padre", "Madre", "Tutor"].map((role) => (
            <label
              key={role}
              className="flex items-center gap-10 mb-3 cursor-pointer"
            >
              <input
                type="checkbox"
                name="tutor"
                value={role}
                className="form-control tutor scale-100"
                disabled={!isMinor}
                checked={selectedCheckbox === role}
                onChange={handleSingleCheckboxSelection}
              />
              {role.toUpperCase()}
            </label>
          ))}

          {selectedCheckbox && (
            <div className="space-y-4">
              {["tutor_name", "tutor_dni"].map((id) => (
                <div key={id}>
                  <input
                    id={id}
                    type="text"
                    placeholder={
                      id === "tutor_name"
                        ? `Nombre del ${selectedCheckbox}`
                        : `DNI/C.I. del ${selectedCheckbox}`
                    }
                    className={`${inputClass} ${errors[id as keyof FormData] ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300"}`}
                    {...register(id as keyof FormData)}
                  />
                  {errors[id as keyof FormData] && (
                    <p className="text-red-500 py-1 text-xs">
                      {errors[id as keyof FormData]?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="col-span-1 md:col-span-2 text-center mt-4">
          <button
            type="submit"
            disabled={!isValid}
            className="px-40 py-2 text-sm font-bold text-white bg-cyan-950 rounded-md hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-950 focus:ring-offset-2"
          >
            IMPRIMIR SOLICITUD
          </button>
        </div>
      </form>
    </div>
  );
}
