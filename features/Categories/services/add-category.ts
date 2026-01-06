import http from "@/services/client/http";
import { categoryType } from "../types";


export const addCategory = async (data: categoryType<File>) => {
    const res = await http.post(`/category`, { data })
    return res.data
}