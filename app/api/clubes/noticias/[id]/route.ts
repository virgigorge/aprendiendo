import { NextRequest, NextResponse } from "next/server";
import pool from "../../../../../lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    // Validar que el ID sea un número
    if (isNaN(Number(id))) {
      return NextResponse.json({ message: "ID inválido" }, { status: 400 });
    }

    // Consultar la noticia en la base de datos
    const [rows] = await pool.query(
      "SELECT * FROM `ligaregional`.`posts` WHERE `id` = ?;",
      [id]
    );

    // Verificar si se encontró la noticia
    if (Array.isArray(rows) && rows.length === 0) {
      return NextResponse.json(
        { message: "Noticia no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
