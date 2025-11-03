const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const routes = require('./routes')

// ✅ 启用 CORS
app.use(cors({
  origin: 'http://localhost:5173', // 允许的前端地址
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()) // 解析 JSON 请求体
app.use('/api', routes) // 所有以/api开头的请求都交给routes处理

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`)
})
