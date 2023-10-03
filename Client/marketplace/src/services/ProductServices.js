import Client from './api'

export const GetProducts = async () => {
  try {
    const res = await Client.get(`/api/products`)
    return res.data
  } catch (error) {
    throw error
  }
}


export const GetProductId = async (productId) => {
  try { 
    const res = await Client.get(`/api/product/${productId}`); // Make sure to use backticks here
    return res.data;
  } catch (error) {
    throw error;
  }
};
