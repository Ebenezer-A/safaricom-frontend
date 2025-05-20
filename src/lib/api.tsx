import axios from "axios";

const BASE_URL = "https://67ab37805853dfff53d696dd.mockapi.io/api/v1/user";

interface LoginPayload {
  email: string;
  password: string;
}

export const loginRequest = async (payload: LoginPayload) => {
  const response = await axios.post(BASE_URL, payload);
  return response.data;
};
