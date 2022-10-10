import axios from 'axios'

const getApiURL = () => {
  return (
    process.env.NEXT_PUBLIC_FINAL_SPACE_API ??
    'https://finalspaceapi.com/api/v0/'
  )
}

const instance = axios.create({
  baseURL: getApiURL(),
  responseType: 'json',
  withCredentials: true,
})

export const getCharacters = async () => {
  return instance.get('/character')
}

export const getEpisodes = async () => {
  return instance.get('/episode')
}
