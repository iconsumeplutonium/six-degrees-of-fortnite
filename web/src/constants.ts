const API_URL_DEV = "http://192.168.189.161:8000";
const API_URL_PROD = "https://api.sixdegreesoffortnite.com";

export const API_URL = import.meta.env.VITE_ENV == "local" ? API_URL_DEV : API_URL_PROD;