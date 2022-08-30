import axios from 'axios'

const authPost = axios.create({
  baseURL: '/api',
  headers: {
    Accept: 'application/json',
  },
})

export default authPost