import { NextRequest, NextResponse } from "next/server";
import pool from "../../../../../../lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { alias: string } }
) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const rawLimit = parseInt(searchParams.get("limit") || "10");

    // Enforce limit constraints (1-10)
    const limit = Math.min(10, Math.max(1, isNaN(rawLimit) ? 10 : rawLimit));

    const sort =
      searchParams.get("sort")?.toLowerCase() === "asc" ? "ASC" : "DESC";

    const [rows] = await pool.query(
      `SELECT m.*, t1.alias AS local_alias, t2.alias AS visitor_alias
       FROM matches AS m
       JOIN teams AS t1 ON m.local_id = t1.id
       JOIN teams AS t2 ON m.visitor_id = t2.id
       WHERE t1.alias = ? OR t2.alias = ?
       ORDER BY m.date ${sort}
       LIMIT ?`,
      [params.alias, params.alias, limit]
    );

    /*return NextResponse.json({
      data: rows,
      meta: {
        limit: limit,
        sort: sort.toLowerCase(),
        returned: Array.isArray(rows) ? rows.length : 0,
      },
    });*/

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
