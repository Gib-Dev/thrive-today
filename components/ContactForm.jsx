"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { FaUser, FaEnvelope, FaCommentDots, FaExclamationCircle } from "react-icons/fa";
export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Le nom est requis.";
        if (!formData.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = "Adresse e-mail invalide.";
        if (!formData.message) newErrors.message = "Le message est requis.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage("");
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setIsSubmitting(true);
            setTimeout(() => {
                console.log("Données envoyées :", formData);
                setFormData({ name: "", email: "", message: "" });
                setErrors({});
                setIsSubmitting(false);
                setSuccessMessage("Votre message a été envoyé avec succès !");
            }, 2000);
        }
    };

    return <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
            <label><FaUser /> Nom :</label>
            <input
                type="text"
                placeholder="Entrez votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className={styles.error}><FaExclamationCircle /> {errors.name}</p>}
        </div>

        <div className={styles.field}>
            <label><FaEnvelope /> Email :</label>
            <input type="email" pattern=".*"
                placeholder="Entrez votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className={styles.error}><FaExclamationCircle /> {errors.email}</p>}
        </div>

        <div className={styles.field}>
            <label><FaCommentDots /> Message :</label>
            <textarea
                placeholder="Tapez votre message ici..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className={styles.error}><FaExclamationCircle /> {errors.message}</p>}
        </div>

        <button type="submit" className={styles.button} disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </button>

        {successMessage && <p className={styles.success}>{successMessage}</p>}
    </form>;
}