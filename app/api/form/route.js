// Importation des outils fournis par Next.js pour gérer les requêtes API
import { NextRequest, NextResponse } from "next/server";

// Fonction exécutée lorsqu'une requête POST est envoyée à /api/form
export async function POST(request) {
  console.log("Requête POST reçue à /api/form");

  try {
    // On récupère les données du formulaire envoyées en JSON
    const formData = await request.json();
    console.log("Données envoyées à l'API :", formData);

    // On retourne une réponse JSON avec un message de succès
    return NextResponse.json({ success: true, message: "Formulaire soumis avec succès!" });
  } catch (error) {
    // En cas d'erreur, on log l’erreur dans la console et on retourne une réponse d’erreur
    console.error("Erreur lors de la soumission du formulaire :", error);
    return NextResponse.json(
      { success: false, message: "Erreur lors de la soumission." },
      { status: 500 }
    );
  }
}
