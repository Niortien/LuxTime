"use server";
import { WatchSchema, watchSchema, watchUpdateSchema, WatchUpdateSchema } from "./watch.schema";


import { BASE_URL } from "../base-url";
import { number } from "zod";
import { Watch } from "@/types/watch";

const WatchAPI = {
  create: {
    endpoint: `${BASE_URL}/watch`,
    method: "POST",
  },
  getAll: {
    endpoint: () => `${BASE_URL}/watch`,
    method: "GET",
  },
  getOne: {
    endpoint: (watchID: number) => `${BASE_URL}/watch/${watchID}`,
    method: "GET",
  },
  update: {
    endpoint: (watchID: number) => `${BASE_URL}/watch/${watchID}`,
    method: "PATCH",
  },
  delete: {
    endpoint: (watchID: number) => `${BASE_URL}/watch/${watchID}`,
    method: "DELETE",
  },
};
//CREATE WATCH ACTION
export const createWatch = async (body: WatchSchema) => {
  // Validation des données
  const { data, success, error } = watchSchema.safeParse(body);
  if (!success) {
    return {
      success: false,
      error: "Erreur de validation",
    };
  }
  // Transformation des données en FormData
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", data.price.toString());
  if (data.image) {
    formData.append("image", data.image);
  }
  console.log("formData", formData.get("image"));
  // Requête
  const response = await fetch(WatchAPI.create.endpoint, {
    method: WatchAPI.create.method,
    body: formData,
  });
  // Récupération des données de la réponse
const responseData = await response.json();

if (!response.ok) {
  return {
    success: false,
    error:
      typeof responseData.message === "string"
        ? responseData.message
        : responseData.message[0],
  };
}

return {
  success: true,
  data: responseData,
};
};

//GET ALL WATCH ACTION
export const getAllWatch = async ():Promise <Watch []>  => {
  // Requête
  const response = await fetch(WatchAPI.getAll.endpoint(), {
    method: WatchAPI.getAll.method,
  });
  // Récupération des données de la réponse
  const responseData = await response.json();
  // Vérification de la réponse
  if (!response.ok) {
    return []
  }
  return responseData;
   
};
//GET ONE WATCH ACTION
export const getOneWatch = async (watchID: number) => {
    // Requête
    const response = await fetch(WatchAPI.getOne.endpoint(watchID), {
        method: WatchAPI.getOne.method,
    });
    // Récupération des données de la réponse
    const responseData = await response.json();
    // Vérification de la réponse
    if (!response.ok) {
        return {
        success: false,
        error:
            typeof responseData.message === "string"
            ? responseData.message
            : responseData.message[0],
        };
    }
    return {
        success: true,
        data: responseData,
    };
    }






//DELETE WATCH ACTION
export const deleteWatch = async (watchID: number) => {    
    // Requête
    const response = await fetch(WatchAPI.delete.endpoint(watchID), {
        method: WatchAPI.delete.method,
    });
    // Récupération des données de la réponse
    const responseData = await response.json();
    // Vérification de la réponse
    if (!response.ok) {
        return {
            success: false,
            error:
                typeof responseData.message === "string"
                ? responseData.message
                : responseData.message[0],
        };
    }
    return {
        success: true,
        data: responseData,
    };
}
//UPDATE WATCH ACTION


export const updateWatch=async (watchID:number, body:WatchUpdateSchema) => {

    // Validation des données
  const { data, success, error } = watchUpdateSchema.safeParse(body);
  if (!success) {
    return {
      success: false,
      error: "Erreur de validation",
    };
  }
    const formData = new FormData(); //
    formData.append("name", data?.name || "");
    formData.append("description", data?.description || "");
    
    formData.append("price", data?.price ? data.price.toString() : "0");
    if (data.image) {
    formData.append("image", data.image);
    }
    // ma requete
    const response = await fetch(WatchAPI.update.endpoint(watchID), {
        method: WatchAPI.update.method,
        body: formData,
    });
    // Récupération des données de la réponse
    const responseData = await response.json();    
    // Vérification de la réponse
    if (!response.ok) {
        return {
            success: false,
            error:
                typeof responseData.message === "string"
                ? responseData.message
                : responseData.message[0],
        };
    }
    return {
        success: true,
        data: responseData,
    };

    
}