"use server"

import { BASE_URL } from "../base-url";

const UserAPI = {
    getAll: {
        endpoint: () => `${BASE_URL}/user`,
        method: "GET",
    },
    detail: {
        endpoint: (userID:string) => `${BASE_URL}/user/${userID}`,
        method: "GET",
    },
    update: {
        endpoint: (userID:string) => `${BASE_URL}/user/${userID}`,
        method: "PATCH",
    },
    delete: {
        endpoint: (userID:string) => `${BASE_URL}/user/${userID}`,
        method: "DELETE",
    },
}