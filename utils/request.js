import axios from 'axios'
// 创建axios实例
const service = axios.create({
    baseURL: ' http://192.168.12.128:7300/mock/5e9addd46ea4248d41971193/tensquare', // api的base_url
    timeout: 30000 // 请求超时时间
  })
export default service