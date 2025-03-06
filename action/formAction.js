"use server";
import sendEmail from "@/sendEmail";

export async function submitForm(prevState, formData) {

  let nom = Object.fromEntries(formData).name
  let email = Object.fromEntries(formData).email
  let message = Object.fromEntries(formData).message

  sendEmail({
    subject: 'Message automatiée envoyé depuis la page contact ',
    text: "Ceci est un message automatisé\n\nUn utilisateur à envoyé un message depuis le formulaire de contact, voici les informations relatives au message :\nNom de l'utilisateur : " + nom 
    + "\nAddresse courriel de l'utilisateur : " + email + "\n\nContenu du message : " + message + "\n\n\n-Système d'envoi de message, Thrive Today.",
    to: "ThriveTodayContact@gmail.com",
    from: process.env.EMAIL
  });
}
