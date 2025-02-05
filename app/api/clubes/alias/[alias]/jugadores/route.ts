import { NextRequest, NextResponse } from "next/server";
import pool from "../../../../../lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { alias: string } }
) {
  try {
    const alias = params.alias;

    const searchParams = req.nextUrl.searchParams;
    const rawLimit = parseInt(searchParams.get("limit") || "10");

    const limit = Math.min(10, Math.max(1, isNaN(rawLimit) ? 10 : rawLimit));

    const [rows] = await pool.query(
      `SELECT p.*, pt.since, t.name AS team_name, t.alias AS team_alias, t.fullname AS team_fullname
       FROM players p
       JOIN players_transfers pt ON p.dni = pt.player_dni
       JOIN teams t ON t.id = pt.team_id
       WHERE t.alias = ?
       AND pt.since = (
         SELECT MAX(pt2.since)
         FROM players_transfers pt2
         WHERE pt2.player_dni = p.dni
       )
       ORDER BY p.surname
       LIMIT ?`,
      [alias, limit]
    );

    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json(
        { message: "No hay jugadores registrados" },
        { status: 404 }
      );
    }

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error al obtener los jugadores:", error);
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
