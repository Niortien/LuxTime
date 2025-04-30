"use server";

import { BASE_URL } from "../base-url";
import { InscriptionSchema, ConnexionSchema, inscriptionSchema, connexionSchema } from "./auth.schema";

const AuthAPI = {
    inscription: {
        endpoint: `${BASE_URL}/auth/inscription`,
        method: "POST",
    },
    connexion: {
        endpoint: `${BASE_URL}/auth/connexion`,
        method: "POST",
    },
    profile: {
        endpoint: `${BASE_URL}/auth/profile`,
        method: "GET",
    }
}

export const inscription = async (body: InscriptionSchema) => {
    // Validation des données
    const { data, success, error } = inscriptionSchema.safeParse(body)
    if (!success) {
        return {
            success: false,
            error: "Erreur de validation"
        };
    }
    // Transformation des données en FormData
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("birth_date", new Date(data.birth_date).toISOString());

    if (data.image) {
        formData.append("image", data.image);
    }

    // Requête
    const response = await fetch(AuthAPI.inscription.endpoint, {
        method: AuthAPI.inscription.method,
        body: formData
    });

    // Récupération des données de la réponse
    const responseData = await response.json();

    if (!response.ok) {
        return {
            success: false,
            error: typeof responseData.message === "string" ? responseData.message : responseData.message[0]
        };
    }

    return {
        success: true,
        data: responseData
    };

}

export const connexion = async (body: ConnexionSchema) => {

    // Validation des données
    const { data, success, error } = connexionSchema.safeParse(body)
    if (!success) {
        return {
            success: false,
            error: "Erreur de validation"
        };
    }
    // Requête
    const response = await fetch(AuthAPI.connexion.endpoint, {
        method: AuthAPI.connexion.method,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });

    // Récupération des données de la réponse
    const responseData = await response.json();

    if (!response.ok) {
        return {
            success: false,
            error: typeof responseData.message === "string" ? responseData.message : responseData.message[0]
        };
    }

    return {
        success: true,
        data: responseData
    };
}


export const profile = async (token: string) => {
    // Requête
    const response = await fetch(AuthAPI.profile.endpoint, {
        method: AuthAPI.profile.method,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    // Récupération des données de la réponse
    const responseData = await response.json();

    if (!response.ok) {
        return {
            success: false,
            error: typeof responseData.message === "string" ? responseData.message : responseData.message[0]
        };
    }

    return {
        success: true,
        data: responseData
    };
}
