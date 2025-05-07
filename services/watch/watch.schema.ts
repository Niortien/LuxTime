import { z } from "zod";

export const watchSchema = z.object({
    name: z.string({
        message: "Vous devez entrer un nom"
    }),
    description: z.string({
        message: "Vous devez entrer une description"
    }),
    price: z.number({
        message: "Vous devez entrer un prix"
    }),
    image: z
        .instanceof(File)
        .refine((file) => file.size > 0, 'La photo est requise')
        .refine((file) => file.size <= 10 * 1024 * 1024, 'La taille de la photo ne doit pas dépasser 10 Mo')
        .refine((file) => ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'].includes(file.type), 'Format de photo non supporté (JPEG, PNG, GIF uniquement)')
        .optional(),
});




export type WatchSchema = z.infer<typeof watchSchema>;



//Mise à jour de montre watch
export const watchUpdateSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    image: z
        .instanceof(File)
        .refine((file) => file.size > 0, 'La photo est requise')
        .refine((file) => file.size <= 10 * 1024 * 1024, 'La taille de la photo ne doit pas dépasser 10 Mo')
        .refine((file) => ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'].includes(file.type), 'Format de photo non supporté (JPEG, PNG, GIF uniquement)')
        .optional(),
});

export type WatchUpdateSchema = Partial< WatchSchema>; // Partial permet de rendre tous les champs optionnels