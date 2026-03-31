import axios from 'axios'

const apiClient = axios.create({
  // 建议直接写死你的 Koyeb 后端地址，确保生产环境能通
  baseURL: 'https://comprehensive-bess-laosha007-0c6836df.koyeb.app/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient