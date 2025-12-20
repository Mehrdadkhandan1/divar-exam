import axios from "axios";
import { env } from "next-runtime-env";

console.log(env("NEXT_PUBLIC_API_BASE_URL"));
const http = axios.create({
  baseURL: env("NEXT_PUBLIC_API_BASE_URL"),
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
