

import { z } from "zod";

// Connexion
export const connexionSchema = z.object({
    email: z.string().email({
        message: "Vous devez entrer un email"
    }),
    password: z.string().min(8, {
        message: "Vous devez utiliser un mot de passe d'au moins 8 caractères"
    }),
});
export type ConnexionSchema = z.infer<typeof connexionSchema>;


// Inscription
export const inscriptionSchema = z.object({
    email: z.string({
        description: "Email",
        message: "Entrer un email"
    }).email({
        message: "Email est incorrect"
    }),
    password: z.string().min(8, {
        message: "Vous devez utiliser un mot de passe d'au moins 8 caractères"
    }),
    first_name: z.string({
        message: "Vous devez entrer un prénom"
    }),
    last_name: z.string({
        message: "Vous devez entrer un nom"
    }),
    birth_date: z.string(),
    image: z
        .instanceof(File)
        .refine((file) => file.size > 0, 'La photo est requise')
        .refine((file) => file.size <= 10 * 1024 * 1024, 'La taille de la photo ne doit pas dépasser 10 Mo')
        .refine((file) => ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'].includes(file.type), 'Format de photo non supporté (JPEG, PNG, GIF uniquement)')
        .optional(),
});

export type InscriptionSchema = z.infer<typeof inscriptionSchema>;