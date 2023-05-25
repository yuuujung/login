import qs from "querystring"
import axios from "axios"
import { cacheAdapterEnhancer } from "axios-extensions"
import { loadTokenFromStorage } from "~/util/authToken"


const axiosInstance = axios.create({
  withCredentials: false,
  baseURL: "http://localhost:8000/",
  headers: { "Cache-Control": "no-cache" },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
})

axiosInstance.interceptors.request.use(         
  (request) => {
    // 요청을 보내기 전에 수행할 로직
    const authToken = loadTokenFromStorage()
    if (authToken) request.headers.Authorization = `Bearer ${authToken}`
   
    console.log(request);

    return request

  },
  error => {
    // 요청 에러가 발생했을 때 수행할 로직
    console.log(error);  // 디버깅
    return Promise.reject(error);
  }
);

// 👇 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
  response => {
    // 응답에 대한 로직 작성
    const res = response.data
    return res
  },
  error => {
    // 응답 에러가 발생했을 때 수행할 로직
    console.log(error); // 디버깅
    return Promise.reject(error);
  }
);

/* baseAPI 정의 */
const baseAPI = {
  get: (url, params, forceUpdate = false, arrayFormat = "repeat", config) =>
    axiosInstance.get(url, {
      forceUpdate,
      params,

      // [1,2,3] 형태의 배열을 "1,2,3" 형태로 stringify한 후 전송
      paramsSerializer: (params) => qs.stringify(params, { arrayFormat }),
      ...config,
    }),
  post: (url, data, config) => axiosInstance.post(url, data, config),
  put: (url, data, config) => axiosInstance.put(url, data, config),
  delete: (url, params) => axiosInstance.delete(url, { data: { ...params } }),
}

export default baseAPI