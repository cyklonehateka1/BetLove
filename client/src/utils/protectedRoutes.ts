import { AxiosResponse } from "axios";
import { backendConnection } from "./axiosInstance";
import Cookie from "js-cookie";

const accessToken: string | undefined = Cookie.get("access_token");

interface ResBody<T> {
  data: T;
}

interface ReqBody<T> {
  data: T;
}

// export const getMethods = async <T>(
//   path: string
// ): Promise<AxiosResponse<ResBody<T>>> => {
//   try {
//     const res = await backendConnection.get(path, {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });
//     return res.data;
//   } catch (error:any) {
//     // return error;
//   }
// };

// export const postMethods = async <ReqBody, ResBody>(path: string, reqBody: ReqBody): Promise<AxiosResponse<ResBody>T>
