import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const extractIdOfGameItemToBeDeleted = url.searchParams.get("id");

    const deletedGamePost = await prisma.games.delete({
      where: {
        id: String(extractIdOfGameItemToBeDeleted),
      },
    });

    if (deletedGamePost) {
      return NextResponse.json({
        success: true,
        message: "Game deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to delete the Game! Please try again",
      });
    }
  } catch (e) {
    console.error(e);

    return NextResponse.json({
      success: false,
      message: 'Something went wrong! Please try again',
    });
  }
}
