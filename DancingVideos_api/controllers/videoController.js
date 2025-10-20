const db = require('../config/db')

//查询所有视频
exports.getAllVideos = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM videos')
    res.json(rows)
  } catch (err) {
    res.status(500).json({ message: '获取视频失败', error: err })
  }
}

// 添加视频
exports.addVideo = async (req, res) => {
  const { title, danceType, difficulty, teacher } = req.body
  try {
    await db.query(
      'INSERT INTO videos (title, danceType, difficulty, teacher) VALUES (?, ?, ?, ?)',
      [title, danceType, difficulty, teacher]
    )
    res.json({ message: '视频添加成功' })
  } catch (err) {
    res.status(500).json({ message: '添加视频失败', error: err })
  }
}

// 删除视频
exports.deleteVideo = async (req, res) => {
  const { id } = req.params
  try {
    await db.query('DELETE FROM videos WHERE id = ?', [id])
    res.json({ message: '视频删除成功' })
  } catch (err) {
    res.status(500).json({ message: '删除视频失败', error: err })
  }
}

// 更新视频信息
exports.updateVideo = async (req, res) => {
  const { id } = req.params
  const { title, danceType, difficulty, teacher } = req.body
  try {
    await db.query(
      'UPDATE videos SET title=?, danceType=?, difficulty=?, teacher=? WHERE id=?',
      [title, danceType, difficulty, teacher, id]
    )
    res.json({ message: '视频更新成功' })
  } catch (err) {
    res.status(500).json({ message: '更新视频失败', error: err })
  }
}