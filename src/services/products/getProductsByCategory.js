import axios from "axios";

export const getProductsByCategory = (category) => {
  return axios.get(`https://fakestoreapi.com/products/category/${category}`).then((response) => {
    const { data } = response;
    return data;
  });
};

