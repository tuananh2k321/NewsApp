import axios, { AxiosInstance as AxiosInstanceType } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = (contentType = 'application/json'): AxiosInstanceType => {
    const axiosInstance: AxiosInstanceType = axios.create({
        baseURL: 'http://192.168.1.4:3000/'
    });

    axiosInstance.interceptors.request.use(
        async (config: any) => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    config.headers = {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': contentType
                    };
                }
                return config;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        (err: any) => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        (res: any) => res.data,
        (err: any) => Promise.reject(err)
    );

    return axiosInstance;
};

export default AxiosInstance;
