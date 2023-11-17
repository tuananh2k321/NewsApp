import AxiosInstance from '../../component/AxiosInstance';

export const register = async (email: string, password: string, name: string) => {
    try {
        const res = await AxiosInstance().post("user/api/register", {
            name: name,
            password: password,
            email: email
        });
        return res; // Trả về toàn bộ response, bạn có thể xử lý dữ liệu sau này
    } catch (err) {
        throw err; // Nếu có lỗi, ném ra lỗi để Redux Saga bắt
    }
};

export const login = async (email: string, password: string) => {
    try {
        const res = await AxiosInstance().post("user/api/login", {
            password: password,
            email: email
        });
        return res; // Trả về toàn bộ response, bạn có thể xử lý dữ liệu sau này
    } catch (err) {
        throw err; // Nếu có lỗi, ném ra lỗi để Redux Saga bắt
    }
};

export const changePassword = async (newPassword: string, currentPassword: string, email: string) => {
    try {
        const res = await AxiosInstance().post("user/api/changePassword?email="+email, {
            newPassword: newPassword,
            currentPassword: currentPassword
        });
        return res; // Trả về toàn bộ response, bạn có thể xử lý dữ liệu sau này
    } catch (err) {
        throw err; // Nếu có lỗi, ném ra lỗi để Redux Saga bắt
    }
};