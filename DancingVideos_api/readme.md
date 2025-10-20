前端请求（POST /api/videos）
       ↓
app.js （接收到请求）
       ↓
routes/index.js （根据路径分配模块）
       ↓
routes/video.js （匹配对应的控制器函数）
       ↓
controllers/videoController.js （执行 SQL 操作）
       ↓
config/db.js （与 MySQL 数据库通信）
       ↓
返回查询结果（res.json）
