import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("Trip request received:", body);

    return NextResponse.json(
      {
        success: true,
        message: "Solicitud recibida correctamente.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error receiving trip request:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No pudimos procesar la solicitud.",
      },
      { status: 500 }
    );
  }
}