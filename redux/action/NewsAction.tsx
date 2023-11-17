import AxiosInstance from '../../component/AxiosInstance';

export const getListNews = async () => {
    try {
        const res = await AxiosInstance().get("news/api/news-list");
        return res; // Trả về toàn bộ response, bạn có thể xử lý dữ liệu sau này
    } catch (err) {
        throw err; // Nếu có lỗi, ném ra lỗi để Redux Saga bắt
    }
};

export const getDetailNews = async (id: string) => {
    try {
        const res = await AxiosInstance().get("news/api/news-detail?id="+id);
        return res; // Trả về toàn bộ response, bạn có thể xử lý dữ liệu sau này
    } catch (err) {
        throw err; // Nếu có lỗi, ném ra lỗi để Redux Saga bắt
    }
};