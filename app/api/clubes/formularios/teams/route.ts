import { NextResponse } from "next/server";
import pool from "../../../../lib/db";

export async function GET() {
  try {
    // Obtener los nombres de los equipos desde la base de datos
    const [rows] = await pool.query(
      "SELECT * FROM `ligaregional`.`teams` WHERE `active` = 1 ORDER BY `name` ASC;"
    );

    // Devolver los resultados como JSON
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
