import { AxiosResponse, AxiosError } from "axios";
import { backendConnection } from "./axiosInstance";
import Cookie from "js-cookie";

const accessToken: string | undefined = Cookie.get("access_token");

export const getMethods = async (path: string) => {
  try {
    const res: AxiosResponse = await backendConnection.get(path, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      return axiosError.response;
    } else if (axiosError.request) {
      return "no response recieved";
    } else {
      return "something happened";
    }
  }
};

interface ReqBody<T> {
  data: T;
}

export const postMethods = async <T>(path: string, reqBody: T) => {
  try {
    const res: AxiosResponse<ReqBody<T>> = await backendConnection.post(
      path,
      reqBody,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      return axiosError.response;
    } else if (axiosError.request) {
      return "no response recieved";
    } else {
      return "something happened";
    }
  }
};
