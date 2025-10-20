const db = require('../config/db')

// 用户注册
exports.register = async (req, res) => {
  const { username, password, phone } = req.body
  try {
    await db.query('INSERT INTO users (username, password, phone) VALUES (?, ?)', [
      username,
      password,
      phone
    ])
    res.json({ message: '注册成功' })
  } catch (err) {
    res.status(500).json({ message: '注册失败', error: err })
  }
}

// 用户登录
exports.login = async (req, res) => {
  const { username, password } = req.body
  try {
    const [rows] = await db.query(
      'SELECT * FROM users WHERE username=? AND password=?',
      [username, password]
    )
    if (rows.length > 0) {
      res.json({ message: '登录成功', user: rows[0] })
    } else {
      res.status(401).json({ message: '用户名或密码错误' })
    }
  } catch (err) {
    res.status(500).json({ message: '登录失败', error: err })
  }
}
