import axios from 'axios'

const getApiURL = () => {
  return process.env.NEXT_PUBLIC_FINAL_SPACE_API
}

const instance = axios.create({
  baseURL: '',
  responseType: 'json',
  withCredentials: true,
})

export const getCharacters = async () => {
  return instance.get('https://finalspaceapi.com/api/v0/character')
}

export const getEpisodes = async () => {
  return instance.get('https://finalspaceapi.com/api/v0/episode')
}
