import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/transactions",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAuthHeader = () => {
  const token = Cookies.get("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const TransactionService = {
  findAll: async () => {
    try {
      const response = await apiClient.get("/", {
        headers: getAuthHeader(),
      });

      if (response.status === 204) {
        console.log("No content received, returning empty array.");
        return [];
      }


      if (response?.data?.transactions && Array.isArray(response.data.transactions)) {
        return response.data.transactions;
      } else {
        throw new Error("Invalid transaction data from server.");
      }
    } catch (error) {
      console.error("Error during fetch transactions:", error);
      throw new Error("Error during fetch transactions.");
    }
  },

  save: async (transaction: { description: string; type: "input" | "output"; value: number }) => {
    try {
      const response = await apiClient.post("/", transaction, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error saving transaction:", error);
      throw error;
    }
  },
};
