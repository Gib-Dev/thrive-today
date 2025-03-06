export async function submitForm(formData) {
  try {
    console.log("Vérification - Envoi à l'URL :", "https://api.emailjs.com/api/v1.0/email/send");

    const templateParams = {
      from_name: formData.name,
      message: formData.message,
      user_email: formData.email,
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_zosra66",
        template_id: "template_ecv8r1m",
        user_id: "8eEHBeFvu5lwQ5vnr",
        template_params: templateParams,
      }),
    });

    console.log("Réponse EmailJS :", response.status, await response.text());

    if (!response.ok) {
      throw new Error(`Erreur EmailJS : ${response.status}`);
    }

    return { success: true, message: "Votre message a été envoyé avec succès !" };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return { success: false, message: "Erreur interne, veuillez réessayer plus tard." };
  }
}
