import Client from './api'

export const GetProducts = async () => {
  try {
    const res = Client.get('/api/products')
    return res.data
  } catch (error) {
    throw error
  }
}