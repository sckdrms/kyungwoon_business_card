// Server.
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const session = require('express-session');
const app = express();

app.use(bodyParser.json());
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

const buildPath = path.join(__dirname, 'namecard/build');
app.use(express.static(buildPath));

// session 미들웨어 설정
app.use(session({
  secret: '1234',  // 세션을 암호화하는 비밀키
  resave: false,              // 세션이 변경되지 않았다면 저장하지 않음
  saveUninitialized: false,   // 세션이 초기화되지 않았다면 저장하지 않음
  cookie: {
    httpOnly: true,           // 클라이언트 측 스크립트에서 쿠키를 읽지 못하도록 설정
    secure: false,            // HTTPS를 사용하지 않는 경우 false로 설정
    maxAge: 1000 * 60 * 60    // 쿠키의 최대 유효 시간 (1시간)
  }
}));

// promise 기반 쿼리를 위한 pool 생성
const promisePool = pool.promise();

app.post('/register', async (req, res) => {
  const { name, title, email, password, phone } = req.body;

  try {
    // 이메일로 이미 가입된 사용자 검사
    const [userByEmail] = await promisePool.query('SELECT * FROM user WHERE user_ID = ?', [email]);
    if (userByEmail.length > 0) {
      return res.status(409).json({ message: '이미 가입된 ID 입니다.' });
    }

    // 전화번호로 이미 가입된 사용자 검사
    const [userByPhone] = await promisePool.query('SELECT * FROM user WHERE user_PH = ?', [phone]);
    if (userByPhone.length > 0) {
      return res.status(409).json({ message: '이미 가입된 번호 입니다.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    // 모든 검사를 통과하면 사용자 정보를 데이터베이스에 추가
    await promisePool.query('INSERT INTO user (user_NAME, user_TITLE, user_ID, user_PW, user_PH) VALUES (?, ?, ?, ?, ?)',
      [name, title, email, hashedPassword, phone]);

    // 성공 응답 보내기
    res.json({ success: true, message: '회원가입이 완료되었습니다.' });

  } catch (err) {
    // 에러 발생 시 처리
    res.status(500).json({ success: false, message: 'Database error', error: err.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const [users] = await promisePool.query('SELECT * FROM user WHERE user_ID = ?', [email]);
    if (users.length === 0) {
      res.status(404).send('User not found');
    } else {
      const user = users[0];
      const isValid = await bcrypt.compare(password, user.user_PW);
      if (isValid) {
        req.session.userId = user.user_ID;  // 세션에 사용자 ID 저장
        res.json({ success: true, message: '로그인 완료', username: user.user_NAME });
      } else {
        res.status(401).json({ message: 'ID 또는아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.입력하신 내용을 다시 확인해주세요. 패스워드를 다시 확인하세요' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});

// 로그아웃 API
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Failed to logout');
    }
    res.send('Logout successful');
  });
});

app.listen(3000, () => {
    console.log('http://localhost:3000 에서 서버 실행중')
})

// app.use(express.static(__dirname + '/build'))
app.use(express.static(path.join(__dirname, 'namecard', 'build')));

app.get('/', (요청, 응답) => {
  응답.sendFile(path.join(__dirname, 'build', 'namecard', 'index.html'));
}) 




