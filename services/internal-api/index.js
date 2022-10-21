import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const dbPrefix =
  process.env.NEXT_PUBLIC_DB_PREFIX ||
  publicRuntimeConfig.branchName.replaceAll('/', '-')

const getBaseURL = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
    return 'https://final-space-app.vercel.app'
  } else if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  } else return 'http://localhost:3000'
}

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  responseType: 'json',
  withCredentials: true
})

const getApiURL = () => {
  return (
    process.env.NEXT_PUBLIC_FINAL_SPACE_API_VERCEL ??
    process.env.NEXT_PUBLIC_FINAL_SPACE_API
  )
}

const instanceFinalSpace = axios.create({
  baseURL: getApiURL(),
  responseType: 'json',
  withCredentials: false
})

export const getCheck = () => {
  console.log(process.env.NEXT_PUBLIC_VERCEL_ENV)
  console.log(process.env.NEXT_PUBLIC_VERCEL_URL)
  console.log(dbPrefix)
  console.log(process.env.NEXT_PUBLIC_DB_PREFIX)
  console.log(publicRuntimeConfig.branchName)
}

export const getNewCharacters = async (...args) => {
  return axiosInstance.get('/api/characters', {
    params: Object.assign({}, ...args)
  })
}

export const addNewCharacter = async (newCharacter) => {
  return axiosInstance.post('/api/characters', newCharacter)
}

export const getCharacters = async () => {
  return instanceFinalSpace.get('/character')
}

export const getEpisodes = async () => {
  return instanceFinalSpace.get('/episode')
}
