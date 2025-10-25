const BASE_URL = import.meta.env.VITE_BASE_URL;
const AUTH = import.meta.env.VITE_AUTH;

export const UpdateProduct = async (body, id) => {
  try {
    const res = await fetch(`${BASE_URL}${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `${AUTH}`,
      },
      body: JSON.stringify(body),
    });
    const response = await res.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};
