import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const gameID = url.searchParams.get("blogID");

    const gameDetails = await prisma.games.findUnique({
      where: {
        id: String(gameID),
      },
    });

    if (gameDetails) {
      return NextResponse.json({
        success: true,
        data: gameDetails,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch the game details! Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
