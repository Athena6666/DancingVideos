import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000/api',//后端服务器地址
  timeout: 5000
})

//注册接口
export function registerUser(data: any) {
  return request.post('users/register', data)
}

//登录接口
export function loginUser(data: any) {
  return request.post('users/login', data)
}