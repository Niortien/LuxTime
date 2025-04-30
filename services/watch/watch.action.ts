"use server"

import { BASE_URL } from "../base-url";

const WatchAPI = {
    create: {
        endpoint: () => `${BASE_URL}/watch`,
        method: "POST",
    },
    getAll: {
        endpoint: () => `${BASE_URL}/watch`,
        method: "GET",
    },
    getOne: {
        endpoint: (watchID:string) => `${BASE_URL}/watch/${watchID}`,
        method: "GET",
    },
    update: {
        endpoint: (watchID:string) => `${BASE_URL}/watch/${watchID}`,
        method: "PATCH",
    },
    delete: {
        endpoint: (watchID:string) => `${BASE_URL}/watch/${watchID}`,
        method: "DELETE",
    },
}