"use client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/app/validations/validationSchema";

interface FormData {  
    player_name: string;
    date: string;
    date_hasta: string;
    date_option: string;
    dni: string;
    club_cedente: string;
    club_cesionario: string;
    procedure: string;
    freedom: string;
    rti: string;
    organization: string;
    dirigido_hacia: string;
    presidente_cedente: string;
    presidente_cesionario: string;
    secretario_cedente: string;
    secretario_cesionario: string;
    clausulas_anexadas: string;
}

const inputClass = `uppercase placeholder:normal-case mt-1 block w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-cyan-950 focus:border-cyan-950`;
const sectionClass = `mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:border-cyan-950 focus:ring-cyan-950`

export default function Rescision() {
    const [selectedLigaCheckbox, setSelectedLigaCheckbox] = useState<string | null>(null);
    const [selectedDirigidoCheckbox, setSelectedDirigidoCheckbox] = useState<string | null>(null);
    

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({
        resolver: zodResolver(validationSchema),
        mode: "onChange",
    });

    const onSubmit = (data: FormData) => {
        if (!selectedLigaCheckbox || !selectedDirigidoCheckbox) {
            return;
        }

        console.log(data);
        window.print();
    };

    function handleLigaCheckboxSelection(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSelectedLigaCheckbox(value === selectedLigaCheckbox ? null : value);
    }

    function handleDirigidoCheckboxSelection(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setSelectedDirigidoCheckbox(value === selectedDirigidoCheckbox ? null : value);
    }

    return (
        <div className="py-10 px-4">
            <h1 className="text-4xl font-bold text-center">RESCISIÓN DE TRANSFERENCIA A PRUEBA</h1>

            <form
                className="grid grid-cols-1 md:grid-cols-2 gap-12 py-10 max-w-6xl mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >

                <div className="space-y-4">
                     <h4 className="font-bold text-lg text-center">DIRIGIDO HACIA:</h4>

                        {["A.F.A", "Liga"].map((role) => (
                            <label key={role} className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    value={role}
                                    className="form-control tutor scale-100"
                                    checked={selectedDirigidoCheckbox === role}
                                    onChange={handleDirigidoCheckboxSelection}
                                />
                                {role.toUpperCase()}
                            </label>
                        ))}

                        {selectedDirigidoCheckbox === "Liga" && (
                        <div className="space-y-4">
                        <div>
                            <label htmlFor="dirigido_hacia" />
                            <input
                                id="nombre_liga"
                                type="text"
                                placeholder={`Nombre de la Liga`}
                                className={`${inputClass}}
                                    ${errors.dirigido_hacia ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
                                {...register("dirigido_hacia")}
                            />
                            {errors.dirigido_hacia && <p className="text-red-500 py-1 text-xs">{errors.dirigido_hacia.message}</p>}
                            </div>
                        </div>
                        )}

                    <div className="space-y-6">
                        <h4 className="font-bold text-lg text-center">TRÁMITE:</h4>
                        
                        <div>
                            <label htmlFor="procedure" className="block text-sm font-medium text-cyan-950"></label>
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
    
                    <div className="space-y-6">
                        <h4 className="font-bold text-lg text-center">JUGADOR:</h4>

                        <div>
                            <label htmlFor="player_name" className="block text-sm font-medium text-cyan-950">
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
                            {errors.player_name && <p className="text-red-500 py-1 text-xs">{errors.player_name.message}</p>}
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

                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-lg text-center">LIGA CEDENTE:</h4>

                        {["A.F.A", "Liga"].map((role) => (
                            <label key={role} className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    value={role}
                                    className="form-control tutor scale-100"
                                    checked={selectedLigaCheckbox === role}
                                    onChange={handleLigaCheckboxSelection}
                                />
                                {role.toUpperCase()}
                            </label>
                        ))}

                        {selectedLigaCheckbox === "Liga" && (
                        <div className="space-y-4">
                        <div>
                            <label htmlFor="organization" />
                            <input
                            id="organization"
                            type="text"
                            placeholder={`Nombre de la Liga`}
                            className={`${inputClass}}
                                ${errors.organization ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
                            {...register("organization")}
                            />
                            {errors.organization && <p className="text-red-500 py-1 text-xs">{errors.organization.message}</p>}
                            </div>
                        </div>
                        )}

                    </div>

                </div>
                </div>

                <div className="space-y-6">
                    <h4 className="font-bold text-lg text-center">CLUB CEDENTE:</h4>

                        <div>
                            <label htmlFor="presidente_cedente" className="block text-sm font-medium text-cyan-950">
                            </label>
                            <input
                                id="presidente_cedente"
                                type="text"
                                placeholder="Nombre del Presidente Cedente"
                                className={`${inputClass}
                                    ${errors.presidente_cedente ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                                {...register("presidente_cedente")}
                            />
                            {errors.presidente_cedente && <p className="text-red-500 py-1 text-xs">{errors.presidente_cedente.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="secretario_cedente" className="block text-sm font-medium text-cyan-950">
                            </label>
                            <input
                                id="secretario_name"
                                type="text"
                                placeholder="Secretario/s cedente/s"
                                className={`${inputClass}
                                    ${errors.secretario_cedente ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                                {...register("presidente_cedente")}
                            />
                            {errors.secretario_cedente && <p className="text-red-500 py-1 text-xs">{errors.secretario_cedente.message}</p>}
                        </div>

                    <div className="space-y-6">
                        <h4 className="font-bold text-lg text-center">CLUB CESIONARIO:</h4>

                        <div>
                            <label htmlFor="presidente_cesionario" className="block text-sm font-medium text-cyan-950">
                            </label>
                            <input
                                id="presidente_name"
                                type="text"
                                placeholder="Nombre del Presidente Cesionario"
                                className={`${inputClass}
                                    ${errors.presidente_cesionario ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                                {...register("presidente_cesionario")}
                            />
                            {errors.presidente_cesionario && <p className="text-red-500 py-1 text-xs">{errors.presidente_cesionario.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="secretario_cesionario" className="block text-sm font-medium text-cyan-950">
                            </label>
                            <input
                                id="secretario_cesionario"
                                type="text"
                                placeholder="Secretario/s cesionario/s"
                                className={`${inputClass}
                                    ${errors.secretario_cesionario ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                                {...register("secretario_cesionario")}
                            />
                            {errors.secretario_cesionario && <p className="text-red-500 py-1 text-xs">{errors.secretario_cesionario.message}</p>}
                        </div>

                        <div className="space-y-6">
                            <h4 className="font-bold text-lg text-center"> 
                                REINTEGRACIÓN DEL JUGADOR:
                            </h4>

                            <div>
                                <label htmlFor="date_hasta"
                                className="block text-sm font-medium text-cyan-950">
                                </label>
                                <input
                                id="date_hasta"
                                type="date"
                                placeholder="Fecha de nacimiento del Jugador"
                                className={`${sectionClass}}
                                    ${errors.date ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-red-500 focus:ring-red-500"}`}
                                {...register("date_hasta")}
                                />
                                {errors.date_hasta && <p className="text-red-500 py-1 text-xs">{errors.date_hasta.message}</p>}
                            </div>

                            <div className="space-y-6">
                                <h4 className="font-bold text-lg text-center"> CLÁUSULAS ANEXAS 
                                    <small className="font-light text-sm"> (OPCIONAL): </small>
                                </h4>

                            <div>
                                <input
                                    id="clausulas_anexadas"
                                    type="text"
                                    placeholder="Cláusulas anexadas"
                                    className={`${inputClass}
                                        ${errors.clausulas_anexadas ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}`}
                                    {...register("clausulas_anexadas")}
                                />
                                {errors.clausulas_anexadas && <p className="text-red-500 py-1 text-xs">{errors.clausulas_anexadas.message}</p>}
                                <div className="text-center text-xs py-2">Por favor, recuerde seleccionar la opción doble-faz de su impresora.</div>
                            </div>

                            </div>
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
    )
}