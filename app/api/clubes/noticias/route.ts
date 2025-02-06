import { NextRequest, NextResponse } from "next/server";
import pool from "../../../lib/db";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const rawLimit = parseInt(searchParams.get("limit") || "10");
    const limit = Math.min(10, Math.max(1, isNaN(rawLimit) ? 10 : rawLimit));
    const sort =
      searchParams.get("sort")?.toLowerCase() === "asc" ? "ASC" : "DESC";

    const [rows] = await pool.query(
      "SELECT * FROM `ligaregional`.`posts` WHERE `section_id` = 1 ORDER BY id " +
        sort +
        " LIMIT ?;",
      [limit]
    );

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
