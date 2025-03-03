// actions/formAction.js
"use server";

import { validateForm } from "@/validations/formValidation";
import { redirect } from "next/navigation";

export async function submitForm(formData) {
  let [error, newFormState] = validateForm(formData);

  if (error) {
    return [error, newFormState];
  }

  // Simuler un traitement (ex: stockage en base de données ou envoi d'un e-mail)
  console.log("Données soumises:", Object.fromEntries(formData));

  // Rediriger après succès
  redirect("/success");
}
