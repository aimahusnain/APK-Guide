import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const getAllGamePosts = await prisma.games.findMany();
    if (getAllGamePosts && getAllGamePosts.length) {
      return NextResponse.json({
        success: true,
        data: getAllGamePosts,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch Game posts. Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}