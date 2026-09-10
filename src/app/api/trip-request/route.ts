import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jesus-g20@hotmail.com",
      subject: `Nueva solicitud de viaje - ${body.destination}`,
      html: `
        <h1>Nueva solicitud de viaje</h1>

        <p><strong>Nombre:</strong> ${body.name}</p>
        <p><strong>Destino:</strong> ${body.destination}</p>
        <p><strong>Ciudad de salida:</strong> ${body.departureCity || "No indicado"}</p>
        <p><strong>Fecha de salida:</strong> ${body.departureDate || "No indicada"}</p>
        <p><strong>Fecha de regreso:</strong> ${body.returnDate || "No indicada"}</p>
        <p><strong>Fechas flexibles:</strong> ${body.flexibleDates ? "Sí" : "No"}</p>
        <p><strong>Viajeros:</strong> ${body.travelers}</p>
        <p><strong>Presupuesto:</strong> ${body.budget || "No indicado"}</p>

        <p><strong>Tipo de viaje:</strong> ${
          body.selectedStyles?.length
            ? body.selectedStyles.join(", ")
            : "No indicado"
        }</p>

        <p><strong>Necesita ayuda con:</strong> ${
          body.selectedHelp?.length
            ? body.selectedHelp.join(", ")
            : "No indicado"
        }</p>

        <hr />

        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>WhatsApp:</strong> ${body.whatsapp}</p>
        <p><strong>Mensaje:</strong> ${body.message || "Sin mensaje adicional"}</p>
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);

      return NextResponse.json(
        {
          success: false,
          message: "No pudimos enviar la solicitud.",
        },
        { status: 500 }
      );
    }

    console.log("Email enviado:", data);

    return NextResponse.json({
      success: true,
      message: "Solicitud enviada correctamente.",
    });
  } catch (error) {
    console.error("Error procesando solicitud:", error);

    return NextResponse.json(
      {
        success: false,
        message: "No pudimos procesar la solicitud.",
      },
      { status: 500 }
    );
  }
}