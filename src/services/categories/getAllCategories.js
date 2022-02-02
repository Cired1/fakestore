import axios from "axios";

export const getAllCategories = () => {
  return axios.get("https://fakestoreapi.com/products/categories").then((response) => {
    const { data } = response;
    return data;
  });
};

