"use server";
const sendEmail = require("../sendEmail");

export async function submitForm(prevState, formData) {
  try {
    // Validation des données
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    let errors = {};

    if (!name) {
      errors.name = "Le nom est requis.";
    }

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      errors.email = "Adresse e-mail invalide.";
    }

    if (!message) {
      errors.message = "Le message est requis.";
    }

    if (Object.keys(errors).length > 0) {
      return errors; // Retourne les erreurs sans recharger la page
    }

    // Envoi de l'email
    await sendEmail({
      subject: 'Message automatique envoyé depuis la page contact',
      text: `Ceci est un message automatisé

Un utilisateur a envoyé un message depuis le formulaire de contact, voici les informations relatives au message :
Nom de l'utilisateur : ${name}
Adresse courriel de l'utilisateur : ${email}

Contenu du message : ${message}

-Système d'envoi de message, Thrive Today.`,
      to: "ThriveTodayContact@gmail.com",
      from: process.env.EMAIL
    });
    
    return { success: true };
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire:", error);
    return { 
      success: false, 
      error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer." 
    };
  }
}