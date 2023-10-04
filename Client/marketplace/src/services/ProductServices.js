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
    // console.log("ProductId in ProductServices:", productId)
    const res = await Client.get(`http://localhost:3001/api/products/${productId}`); 
    return res.data;
  } catch (error) {
    throw error;
  }
};
