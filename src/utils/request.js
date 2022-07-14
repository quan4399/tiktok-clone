import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

{/* async khi goi async thif se tra ve promise */}
export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
}

export default request;