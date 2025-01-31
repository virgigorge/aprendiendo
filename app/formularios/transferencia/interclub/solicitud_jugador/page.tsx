"use client";
import { ChangeEvent, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/app/validations/validationSchema";

interface FormData {  
    player_name: string;
    date: string;
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

const inputClass = `uppercase placeholder:normal-case mt-1 block w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-cyan-950 focus:border-cyan-950`;
const sectionClass = `mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:border-cyan-950 focus:ring-cyan-950`

export default function Solicitud_Jugador() {
    const [selectedTutorCheckbox, setSelectedTutorCheckbox] = useState<string | null>(null);
    const [isMinor, setIsMinor] = useState(false);

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
    
        if (isMinor && !selectedTutorCheckbox) {
            return;
        }
    
        if (!isMinor) {
            data.tutor_name = "";
            data.tutor_dni = "";
        }
    
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


    function handleTutorCheckboxSelection(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSelectedTutorCheckbox(value === selectedTutorCheckbox ? null : value);
    }

    return (
        <div className="py-10 px-4">
            <h1 className="text-4xl font-bold text-center">SOLICITUD DE JUGADOR A LIGA (001)</h1>

            <form
                className="grid grid-cols-1 md:grid-cols-2 gap-12 py-10 max-w-6xl mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="space-y-6">
                    <h4 className="font-bold text-lg text-center">QUIEN SUSCRIBE:</h4>
                    <div>
                        <label htmlFor="player_name" className="block text-sm font-medium text-cyan-950">
                            NOMBRE COMPLETO DEL JUGADOR
                        </label>
                        <input
                            id="player_name"
                            type="text"
                            placeholder="Nombre completo del Jugador"
                            className={`${inputClass}}
                                ${errors.player_name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                            {...register("player_name")}
                        />
                        {errors.player_name && <p className="text-red-500 py-1 text-xs">{errors.player_name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="club" className="block text-sm font-medium text-cyan-950">
                            NOMBRE DEL CLUB CEDENTE
                        </label>
                        <select
                            id="club"
                            className={`${sectionClass}}
                                ${errors.club_cedente ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                            {...register("club_cedente")}
                        >
                            <option value="">Seleccione el Club Cedente</option>
                            <option value="1">PRUEBA</option>
                        </select>
                        {errors.club_cedente && <p className="text-red-500 py-1 text-xs">{errors.club_cedente.message}</p>}
                    </div>
                                      
    
                    <div>
                        <label htmlFor="club" className="block text-sm font-medium text-cyan-950">
                            NOMBRE DEL CLUB CESIONARIO
                        </label>
                        <select
                            id="club"
                            className={`${sectionClass}}
                                ${errors.club_cesionario ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                            {...register("club_cesionario")}
                        >
                            <option value="">Seleccione el Club Cesionario</option>
                            <option value="1">PRUEBA</option>
                        </select>
                        {errors.club_cesionario && <p className="text-red-500 py-1 text-xs">{errors.club_cesionario.message}</p>}
                    </div>

                    <div className="space-y-6">
                    <h4 className="font-bold text-lg text-center">TRÁMITE:</h4>

                    <div>
                        <label htmlFor="procedure" className="block text-sm font-medium text-cyan-950"></label>
                        <select
                            id="tramite"
                            className={`${sectionClass}}
                                ${errors.procedure ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                            {...register("procedure")}
                        >
                            <option value="">Seleccione el Trámite</option>
                            <option value="DEFINITIVO">DEFINITIVO</option>
                            <option value="PRUEBA CON CARGO">A PRUEBA CON CARGO</option>
                            <option value="PRUEBA SIN CARGO">A PRUEBA SIN CARGO</option>
                        </select>
                        {errors.procedure && <p className="text-red-500 py-1 text-xs">{errors.procedure.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="freedom" className="block text-sm font-medium text-cyan-950"></label>
                        <select
                            id="freedom"
                            className={`${sectionClass}}
                                ${errors.freedom ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                            {...register("freedom")}
                        >
                            <option value="CON LIBERTAD">CON LIBERTAD DE ACCIÓN</option>
                            <option value="SIN LIBERTAD">SIN LIBERTAD DE ACCIÓN</option>
                        </select>
                        {errors.freedom && <p className="text-red-500 py-1 text-xs">{errors.freedom.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="rti" className="block text-sm font-medium text-cyan-950">
                        </label>
                        <input
                            id="rti"
                            type="text"
                            placeholder="Si es por art. 20 del RTI, indicar inc."
                            className={`${inputClass}}
                                ${errors.rti ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                            {...register("rti")}
                        />
                        {errors.rti && <p className="text-red-500 py-1 text-xs">{errors.rti.message}</p>}
                    </div>
                    </div>

                </div> 
                
                <div className="space-y-6">
                    <h4 className="font-bold text-lg text-center">DATOS E IDENTIDAD:</h4>
                    
                    <div>
                        <label htmlFor="dni" className="block text-sm font-medium text-cyan-950">
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
                        {errors.dni && <p className="text-red-500 py-1 text-xs">{errors.dni.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="date"
                        className="block text-sm font-medium text-cyan-950">
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
                        {errors.date && <p className="text-red-500 py-1 text-xs">{errors.date.message}</p>}
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-center">AUTORIZACIÓN (SÓLO SI ES MENOR DE EDAD):</h4>
                        {["Padre", "Madre", "Tutor"].map((role) => (
                            <label key={role} className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    name="tutor"
                                    value={role}
                                    className="form-control tutor scale-100"
                                    disabled={!isMinor}
                                    checked={selectedTutorCheckbox === role}
                                    onChange={handleTutorCheckboxSelection}
                                />
                                {role.toUpperCase()}
                            </label>
                        ))}
                        {selectedTutorCheckbox && (
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="tutor_name"/>
                                    <input
                                        id="tutor_name"
                                        type="text"
                                        placeholder={`Nombre del ${selectedTutorCheckbox}`}
                                        className={`${inputClass}}
                                            ${errors.tutor_name ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
                                        {...register("tutor_name")}
                                    />
                                    {errors.tutor_name && <p className="text-red-500 py-1 text-xs">{errors.tutor_name.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="tutor_dni" />
                                    <input
                                        id="tutor_dni"
                                        type="text"
                                        placeholder={`DNI/C.I. del ${selectedTutorCheckbox}`}
                                        className={`${inputClass}}
                                            ${errors.tutor_dni ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
                                        {...register("tutor_dni")}
                                        onInput={(e) => {
                                            const target = e.target as HTMLInputElement;
                                            target.value = target.value.replace(/\D/g, "");
                                        }}
                                    />
                                    {errors.tutor_dni && <p className="text-red-500 py-1 text-xs">{errors.tutor_dni.message}</p>}
                                </div>
                            </div>
                        )}
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
