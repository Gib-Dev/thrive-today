"use server";

export async function submitForm(prevState, formData) {
  let errors = {};

  if (!formData.get("name")) {
    errors.name = "Le nom est requis.";
  }

  if (!formData.get("email") || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.get("email"))) {
    errors.email = "Adresse e-mail invalide.";
  }

  if (!formData.get("message")) {
    errors.message = "Le message est requis.";
  }

  if (Object.keys(errors).length > 0) {
    return errors; // Retourne les erreurs sans recharger la page
  }

  console.log("Données soumises :", Object.fromEntries(formData));

  return { success: true };
}
