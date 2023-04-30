export const url = "https://hosi-api-production.up.railway.app";

export const setHeaders = () => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  return headers;
};
