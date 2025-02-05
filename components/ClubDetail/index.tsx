import Image from "next/image";
import { ClubDetailProps, Jugador, Partido } from "./interface";

export default function ClubDetail({
  club,
  partidos,
  jugadores,
}: {
  club: ClubDetailProps;
  partidos: Partido[];
  jugadores: Jugador[];
}) {
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold mb-6 uppercase">{club.fullname}</h1>

      <div className="grid md:grid-cols-2">
        <div className="col-md-4 py-4 px-4">
          <Image
            src={"http://localhost:3000/" + club.alias + ".png"}
            width={230}
            height={200}
            alt={`Escudo ${club.fullname}`}
          />

          <div className="py-4 text-left">
            <p className="py-4 text-normal">
              <b>FECHA DE FUNDACIÓN:</b>
              <br />
              {club.date}
              <br />
              <br />
              <b>CAMPO DE JUEGO:</b>
              <br />
              {club.stadium}
              <br />
              <br />
              <b>PRESIDENTE:</b>
              <br />
              {club.president}
              <br />
              <br />
              <b>SECRETARIO:</b>
              <br />
              {club.secretary}
              <br />
              <br />
              <b>SEDE OFICIAL:</b>
              <br />
              {club.stadium_location}
              <br />
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-4 py-4">
            ÚLTIMOS PARTIDOS
          </h3>
          <div className="overflow-x-auto px-4">
            <table className="w-full">
              <thead>
                <tr className="bg-white">
                  <th className="p-4 text-center">Local</th>
                  <th className="p-4 text-center"></th>
                  <th className="p-4 text-center"></th>
                  <th className="p-4 text-center">Visita</th>
                </tr>
              </thead>

              <tbody>
                {partidos.map((partido) => (
                  <tr key={partido.id} className="border-t">
                    <td className="p-2 text-center">
                      <Image
                        src={
                          "http://localhost:3000/" +
                          partido.local_alias +
                          ".png"
                        }
                        width={35}
                        height={35}
                        alt="Local"
                        className="mx-auto"
                      />
                    </td>

                    <td className="p-2 w-16 text-center font-bold text-lg bg-zinc-400">
                      {partido.local_score}
                    </td>

                    <td className="p-2 w-16 text-center font-bold text-lg bg-zinc-300">
                      {partido.visitor_score}
                    </td>

                    <td className="p-2 text-center">
                      <Image
                        src={
                          "http://localhost:3000/" +
                          partido.visitor_alias +
                          ".png"
                        }
                        width={35}
                        height={35}
                        alt="Visitante"
                        className="mx-auto"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr />
          <br />

          <div className="mt-8 px-4">
            <h3 className="text-2xl font-bold text-center mb-4">
              LISTA DE BUENA FE
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 px-4 text-left">Apellido</th>
                    <th className="p-2 px-4 text-left">Nombre</th>
                  </tr>
                </thead>
                <tbody>
                  {jugadores.map((jugador, index) => (
                    <tr
                      key={`${jugador.id}-${index}`}
                      className="border-b text-left"
                    >
                      <td className="p-2 px-4 font-bold text-cyan-700">
                        {jugador.surname}
                      </td>
                      <td className="p-2 px-4">{jugador.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
