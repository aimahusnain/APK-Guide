import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const extractData = await request.json();

    const updatedGamePost = await prisma.games.update({
      where: {
        id: String(extractData.id),
      },
      data: {
        comments: extractData.comments,
      },
    });

    if (updatedGamePost) {
      return NextResponse.json({
        success: true,
        message: "Game post updated",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to update the post! Please try again",
      });
    }
  } catch (e) {
    console.error(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
