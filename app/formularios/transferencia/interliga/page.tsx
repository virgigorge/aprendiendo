import Link from "next/link";

export default function InterLiga() {
    return (
        <div className="h-[610px] flex flex-col items-center py-10">

            <h1 className="text-4xl font-bold text-center">
                ¿QUÉ TIPO DE FORMULARIO DESEA COMPLETAR?
            </h1>

            <br/>

            <div className="flex gap-2 mt-4 text-center">

                <Link href="/formularios/transferencia/interliga/solicitud_jugador" passHref>

                    <button className="px-6 py-4 text-base font-bold text-white bg-cyan-900 rounded-md hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-950  focus:ring-offset-2">
                        Solicitud Jugador
                    </button>

                </Link>

                <Link href="/formularios/transferencia/interliga/solicitud_liga" passHref>

                    <button className="px-6 py-4 text-base font-bold text-white bg-cyan-900 rounded-md hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-950  focus:ring-offset-2">
                        Solicitud Liga
                    </button>
                   
                </Link>

                <Link href="/formularios/transferencia/interliga/convenio_prueba" passHref>

                    <button className="px-6 py-4 text-base font-bold text-white bg-cyan-900 rounded-md hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-950  focus:ring-offset-2">
                        Convenio a Prueba
                    </button>

                </Link>

                <Link href="/formularios/transferencia/interliga/concedido" passHref>

                    <button className="px-6 py-4 text-base font-bold text-white bg-cyan-900 rounded-md hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-950  focus:ring-offset-2">
                        Concedido
                    </button>

                </Link>

                <Link href="/formularios/transferencia/interliga/denegado" passHref>

                    <button className="px-6 py-4 text-base font-bold text-white bg-cyan-900 rounded-md hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-950  focus:ring-offset-2">
                        Denegado
                    </button>

                </Link>

                <Link href="/formularios/transferencia/interliga/rescision" passHref>

                    <button className="px-6 py-4 text-base font-bold text-white bg-cyan-900 rounded-md hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-950  focus:ring-offset-2">
                        Rescisión
                    </button>

                </Link>

            </div>
 


        </div>

    )
}