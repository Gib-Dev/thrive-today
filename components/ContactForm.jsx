"use client";

import { useActionState } from "react";
import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import { FaUser, FaEnvelope, FaCommentDots, FaExclamationCircle } from "react-icons/fa";
import { submitForm } from "../action/formAction";
export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [state, formAction] = useActionState(validation, {});

    function validation(prevState, formData){
        state.success = false;
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
        submitForm(prevState, formData);
        return { success: true };
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Réinitialiser les champs du formulaire après un envoi réussi
    useEffect(() => {
        if (state.success) {
            setFormData({ name: "", email: "", message: "" });
        }
    }, [state.success]);

    return (
        <form action={formAction} className={styles.form} noValidate>
            <div className={styles.field}>
                <label><FaUser /> Nom :</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    value={formData.name}
                    onChange={handleChange}
                    className={state.name ? styles.errorInput : ""}
                />
                {state.name && <p className={styles.error}><FaExclamationCircle /> {state.name}</p>}
            </div>

            <div className={styles.field}>
                <label><FaEnvelope /> Email :</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Addresse Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={state.email ? styles.errorInput : ""}
                />
                {state.email && <p className={styles.error}><FaExclamationCircle /> {state.email}</p>}
            </div>

            <div className={styles.field}>
                <label><FaCommentDots /> Message :</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={state.message ? styles.errorInput : ""}
                ></textarea>
                {state.message && <p className={styles.error}><FaExclamationCircle /> {state.message}</p>}
            </div>

            <button type="submit" className={styles.button} disabled={state.isSubmitting}>
                {state.isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>

            {state.success && <p className={styles.success}>Votre message a été envoyé avec succès !</p>}
        </form>
    );
}