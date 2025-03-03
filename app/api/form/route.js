import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  console.log("Requête POST reçue à /api/form");

  try {
    const formData = await request.json();
    console.log("Données envoyées à l'API :", formData);

    return NextResponse.json({ success: true, message: "Formulaire soumis avec succès!" });
  } catch (error) {
    console.error("Erreur lors de la soumission du formulaire :", error);
    return NextResponse.json(
      { success: false, message: "Erreur lors de la soumission." },
      { status: 500 }
    );
  }
}
