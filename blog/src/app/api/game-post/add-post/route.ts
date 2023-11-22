import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const extractPostData = await request.json();
    const newlyCreatedPost = await prisma.games.create({
      data: extractPostData
    });
    console.log(extractPostData, 'extractPostData');

    if (newlyCreatedPost) {
      return NextResponse.json({
        success: true,
        message: "New game post added successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong ! Please try again",
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