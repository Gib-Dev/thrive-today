"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import { FaUser, FaEnvelope, FaCommentDots, FaExclamationCircle } from "react-icons/fa";
import { submitForm } from "../action/formAction";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [state, setState] = useState({ success: null, message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setState({ success: null, message: "" });

        const result = await submitForm(formData);

        setState(result);
        setIsSubmitting(false);

        if (result.success) {
            setFormData({ name: "", email: "", message: "" });
        }
    };

    const isFormValid = formData.name && formData.email && formData.message;

    return <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.field}>
            <label><FaUser /> Nom :</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className={styles.field}>
            <label><FaEnvelope /> Email :</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className={styles.field}>
            <label><FaCommentDots /> Message :</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>

        {state.message && (
            <p className={state.success ? styles.success : styles.error}>
                {state.success ? "" : "Erreur "} {state.message}
            </p>
        )}

        <button type="submit" className={styles.button} disabled={!isFormValid || isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </button>
    </form>;
}
