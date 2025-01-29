import Link from "next/link";

export default function FormulariosPage() {
    return (
        <div className="h-[610px] items-center py-10">

            <h1 className="text-4xl font-bold text-center">
                ¿QUÉ TIPO DE FORMULARIO DESEA COMPLETAR?
            </h1>

            <br/>

            <Link href="/formularios/inscripcion" passHref>

                <div className="col-span-1 md:col-span-2 text-center mt-4">
                    <button className="px-6 py-4 text-base font-bold text-white bg-cyan-900 rounded-md hover:bg-cyan-950 focus:outline-none focus:ring-2 focus:ring-cyan-950  focus:ring-offset-2">
                    Inscripción
                    </button>
                </div>
                
            </Link>


        </div>

    )
}