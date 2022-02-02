import axios from "axios";

export const getAllProducts = () => {
  return axios.get("https://fakestoreapi.com/products").then((response) => {
    const { data } = response;
    return data;
  });
};

