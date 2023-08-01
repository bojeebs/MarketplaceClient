import Client from './api'

export const GetCart = () => {
  try {
    const res = Client.get('/api/shoppingcart/:userId')
    return res.data
  } catch (error) {
    throw error
  }
}