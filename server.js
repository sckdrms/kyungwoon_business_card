// server.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const session = require('express-session');
const app = express();


// 창근 로컬

// const DB_CONFIG = require('./key');
// const pool = mysql.createPool({
//   ...DB_CONFIG,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });



// 진우 로컬
// 환경 변수에서 데이터베이스 설정 가져오기

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use(bodyParser.json());

const promisePool = pool.promise();

promisePool.getConnection()
  .then(connection => {
    console.log('데이터베이스 연결 성공');
    connection.release();
  })
  .catch(err => {
    console.error('데이터베이스 연결 실패:', err.message);
  });

const buildPath = path.join(__dirname, 'namecard/build');
app.use(express.static(buildPath));

app.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 5 * 60 * 60 * 1000
  }
}));

app.post('/register', async (req, res) => {
  const { name, title, email, password, phone } = req.body;

  try {
    const [userByEmail] = await promisePool.query('SELECT * FROM user WHERE user_ID = ?', [email]);
    if (userByEmail.length > 0) {
      return res.status(409).json({ message: '이미 가입된 ID 입니다.' });
    }

    const [userByPhone] = await promisePool.query('SELECT * FROM user WHERE user_PH = ?', [phone]);
    if (userByPhone.length > 0) {
      return res.status(409).json({ message: '이미 가입된 번호 입니다.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await promisePool.query('INSERT INTO user (user_NAME, user_TITLE, user_ID, user_PW, user_PH) VALUES (?, ?, ?, ?, ?)',
      [name, title, email, hashedPassword, phone]);

    res.json({ success: true, message: '회원가입이 완료되었습니다.' });

  } catch (err) {
    res.status(500).json({ success: false, message: 'Database error', error: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const [users] = await promisePool.query('SELECT * FROM user WHERE user_ID = ?', [email]);
    if (users.length === 0) {
      return res.status(404).send('User not found');
    }
    const user = users[0];
    const isValid = await bcrypt.compare(password, user.user_PW);
    if (isValid) {
      req.session.userId = user.user_ID;
      req.session.username = user.user_NAME;
      req.session.usertitle = user.user_TITLE;
      req.session.useremail = user.user_ID;
      req.session.userphone = user.user_PH;

      res.json({ 
        success: true, 
        message: '로그인 완료', 
        username: user.user_NAME, 
        usertitle: user.user_TITLE, 
        useremail: user.user_ID, 
        userphone: user.user_PH 
      });
    } else {
      res.status(401).json({ message: 'ID 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Failed to logout');
    }
    res.clearCookie('connect.sid');
    res.send('Logout successful');
  });
});

app.get('/check-session', (req, res) => {
  if (req.session.userId) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

app.use((req, res, next) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('http://localhost:3000 에서 서버 실행중')
});