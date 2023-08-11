import Client from "./api";

export const LoginUser = async (data) => {
  try { 
    const res = await Client.post('/api/login', data)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('id', res.data.user.id)
    return res.data.user
  } catch (error) {
    throw error
  }
}


export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('api/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/api/session')
    return res.data
  } catch (error) {
    throw error
  }
}