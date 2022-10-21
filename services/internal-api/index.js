import axios from 'axios'

const getBaseURL = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') { return 'https://final-space-app.vercel.app' } else if (process.env.NEXT_PUBLIC_VERCEL_URL) { return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` } else return 'http://localhost:3000'
}

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  responseType: 'json',
  withCredentials: true
})

export const getNewCharacters = async (...args) => {
  return axiosInstance.get('/api/characters', {
    params: Object.assign({}, ...args)
  })
}
