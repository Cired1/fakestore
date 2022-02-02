import axios from "axios";

export const getSingleProduct = (id) => {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      const { data } = response;
      return data;
    });
};
