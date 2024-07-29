import axios from "axios";
import { useEffect, useState } from "react";
import { UseUserInfo } from "../store/UseUserInfo";

export function UseAxiosRequest({ method = "POST", url, baseUrl, body = {}, headers, dependency = [] }) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const fetchData = async () => {
        setLoading(true);
        try {
            const result = await axiosReq({ method, url, baseUrl, body, headers })
            setData(result);

        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => { fetchData() }, dependency)
    return { data, loading, error, setData, setLoading }
}
export async function axiosReq({ method, url, baseUrl, body, headers }) {
    try {

        const { data: res } = await axios({
            // headers: headers,
            baseURL: baseUrl || "http://localhost:3355/",
            method,
            data: body,
            url
        })
        return res
    }
    catch (error) {
        console.error("Error in axiosReq: ", error)
        throw error.message;
    }
}
