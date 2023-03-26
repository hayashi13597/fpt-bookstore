import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
  params: {
    key: 'AIzaSyDmLbg__P70fr2oUS5vo0sxlJRFPdR-vao',
  }
});
export const get = async (path, option = {}) => {
  const response = await axiosInstance.get(path, option);
  return response.data;
}

export default axiosInstance;