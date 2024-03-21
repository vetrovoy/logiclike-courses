import axios, { AxiosResponse } from "axios";

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
});

interface IApi {
  get<T>(url: string): Promise<T>;
}

export const api: IApi = {
  get: async function <T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await apiInstance.get(url);
      const data: T = response.data;
      return data;
    } catch (error) {
      console.error("An unexpected error occurred in GET request:", error);
      throw error;
    }
  },
};
