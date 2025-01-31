import Link from "next/link";

export default function Inscripcion() {
    return (
        <div className="h-[610px] flex flex-col items-center py-10">

            <h1 className="text-4xl font-bold text-center">
                ¿QUÉ TIPO DE FORMULARIO DESEA COMPLETAR?
            </h1>

            <br/>

            <div className="flex gap-2 mt-4 text-center">

                <Link href="/formularios/inscripcion/ficha_comun" passHref>

                    <button className="px-6 py-4 text-base font-bold text-white bg-cyan-900 rounded-md hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-950 focus:ring-offset-2">
                    Solicitud de inscripción
                    </button>
                    
                </Link>

                <Link href="/formularios/inscripcion/declaracion_jurada" passHref>

                    <button className="px-6 py-4 text-base font-bold text-white bg-cyan-900 rounded-md hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-950 focus:ring-offset-2">
                    Declaración Jurada (art. 25)
                    </button>

                </Link>

            </div>

        </div>

    )
}