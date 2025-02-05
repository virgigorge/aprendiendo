import ClubDetail from "@/components/ClubDetail";
import {
  ClubDetailProps,
  Jugador,
  Partido,
} from "@/components/ClubDetail/interface";
import { notFound } from "next/navigation";

export default async function ClubPage({
  params,
}: {
  params: { alias: string };
}) {
  // Obtener datos del club
  const response = await fetch(
    "http://localhost:3000/api/clubes/alias/" + params.alias
  );

  // Si el club no existe, mostrar página 404
  if (!response.ok) {
    notFound();
  }

  const club: ClubDetailProps = await response.json();

  // Obtener últimos partidos
  const responsePartidos = await fetch(
    `http://localhost:3000/api/clubes/alias/${params.alias}/partidos?limit=5`
  );
  const partidos: Partido[] = await responsePartidos.json();

  // Obtener jugadores destacados
  const responseJugadores = await fetch(
    `http://localhost:3000/api/clubes/alias/${params.alias}/jugadores?limit=10`
  );
  const jugadores: Jugador[] = await responseJugadores.json();

  return <ClubDetail club={club} partidos={partidos} jugadores={jugadores} />;
}
