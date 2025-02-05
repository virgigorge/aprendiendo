import { NextRequest, NextResponse } from "next/server";
import pool from "../../../lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const [rows] = await pool.query("SELECT * FROM teams WHERE `id` = ?", [
      params.id,
    ]);
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
