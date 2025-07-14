import axios from "axios";

const API_BASE_URL = "https://your-api.com/api"; // replace with real base

// export async function fetchChats() {
//   const response = await axios.get(`${API_BASE_URL}/chats`);
//   return response.data;
// }
import mockChats from "../../data/mockChats.json";

export async function fetchChats() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockChats);
    }, 300); // simulate delay
  });
}