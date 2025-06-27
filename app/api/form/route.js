import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schéma de validation avec Zod
const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères").max(50, "Le nom ne peut pas dépasser 50 caractères"),
  email: z.string().email("Adresse email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères").max(1000, "Le message ne peut pas dépasser 1000 caractères"),
});

export async function POST(request) {
  try {
    // Vérification de la méthode HTTP
    if (request.method !== 'POST') {
      return NextResponse.json(
        { success: false, message: "Méthode non autorisée" },
        { status: 405 }
      );
    }

    // Récupération et validation des données
    const body = await request.json();
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Données invalides",
          errors: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // Log des données validées (en production, vous pourriez les envoyer par email)
    console.log("Formulaire validé reçu:", {
      name,
      email,
      message: message.substring(0, 100) + "...", // Log partiel pour la sécurité
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip'),
    });

    // Simulation d'un délai de traitement
    await new Promise(resolve => setTimeout(resolve, 500));

    // Réponse de succès
    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.",
      data: {
        name,
        email,
        submittedAt: new Date().toISOString(),
      }
    });

  } catch (error) {
    console.error("Erreur lors du traitement du formulaire:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Gestion des autres méthodes HTTP
export async function GET() {
  return NextResponse.json(
    { success: false, message: "Méthode GET non autorisée" },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { success: false, message: "Méthode PUT non autorisée" },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, message: "Méthode DELETE non autorisée" },
    { status: 405 }
  );
} 