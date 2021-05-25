import axios from "axios";

const accessToken = 'accessToken';
const refreshToken = 'refreshToken';
const axiosInstance = axios.create();
const refreshAccessToken = async () => {
    const res = await axios.post('http://hieulnhcm.ddns.net:5000/api/token', {
        // accessToken: accessToken,
        refreshToken: 'string'
    })
    return res.data
}
axiosInstance.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${accessToken}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
axiosInstance.interceptors.response.use(
    response => {
        return(response)
    },
    async function (error) {
        console.log(error)
        const originalRequest = error.config;
        if (error?.response?.status === 500) {
            const accessToken = refreshAccessToken();
            // originalRequest.headers.common['Authorization'] = `Bearer ${accessToken}new`;
            // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            // axios.defaults.data.common['refreshToken'] = accessToken;
            // return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;