const BASE_URL = import.meta.env.VITE_BASE_URL;
const AUTH = import.meta.env.VITE_AUTH;

export const DeleteProduct = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `${AUTH}`,
      },
    });
    const response = await res.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};
