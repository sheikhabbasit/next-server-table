export const apiService = {
  get: async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  post: async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  put: async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  delete: async (url) => {
    try {
      const response = await fetch(url, { method: "DELETE" });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
