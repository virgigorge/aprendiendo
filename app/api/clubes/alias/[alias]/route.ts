import { NextRequest, NextResponse } from "next/server";
import pool from "../../../../../lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { alias: string } }
) {
  try {
    const [rows] = await pool.query("SELECT * FROM teams WHERE `alias` = ?", [
      params.alias,
    ]);
    // Check if results array is empty
    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json({ message: "Team not found" }, { status: 404 });
    }

    // Return the first element of the array
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
