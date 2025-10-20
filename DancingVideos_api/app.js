const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

app.use(express.json()) // 解析 JSON 请求体
app.use('/api', routes) // 所有以/api开头的请求都交给routes处理

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`)
})
