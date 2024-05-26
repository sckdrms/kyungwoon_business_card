![image001](https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/4b6d97f5-7f1a-487a-8e28-b1490cab60aa)
* * *
### 완성 결과
![KYNC_김창근_학생](https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/f054bf76-6d24-4287-abc1-a2bfa00d3656)
* * *

* 기본 수행 목표
  - ~~DateBase 연동(MySQL or MongoDB)~~ ▶ MySQL 사용
  - ~~쿠키&세션 활용~~ ▶ Login 구현
  - Pug 또는 Nunjucks를 활용한 웹 꾸미기
  - ~~Login 구현~~
  - ~~Route 구현~~ ▶ react-router-dom 사용

* 추가 수행 목표
  - ~~React.js 사용~~
  - ~~Sember 버저닝~~
  - ~~OAUTH 상태관리~~
  - ~~Dotenv 사용~~
  - ~~bcrypt 사용~~
  - ~~SQL Ingection 보안~~
  - ~~쿠키&세션 활용~~ ▶ Login 구현 + 세션 만료 시 자동 로그아웃
  - ~~이미지 크롭 후 사용자 맞춤 파일이름으로 저장~~

* * *

* server npm install list
  - npm install express mysql mysql2 cookie-parser express-session bcrypt dotenv

* * *
semver versioning

* 0.1.0 / 2024-05-08 / 김창근
  - node.js, react.js를 사용한 기본 웹어플리케이션 업로드

* 0.2.0 / 2024-05-11 / 김창근
  - react.js의 react-router-dom을 사용하여 route기능 추가

* 0.3.0 / 2024-05-11 / 정진우
  - 로컬 데이터베이스 생성 및 서버와의 연동
  - dotenv 데이터 베이스 환경 변수 추가
  - 회원가입 기능 추가
  - 로그인 기능 추가
  - bcrypt을 사용하여 hashing기능 추가
  - express-session을 사용하여 session기능 추가

* 0.3.1 / 2024-05-11 / 정진우 
  - .env 경로를 찾지못하는 문제를 dotenv.config()에 옵션을 추가하여 .env 파일의 경로를 명시적으로 지정하여 해결

* 0.4.0 / 2024-05-25 / 김창근 
  - 로그인 시 ID부분을 email요청을 동하여 sql injection 차단
  - 로그인 했을 때 namecard에 정보기입 기능 추가

* 0.5.0 / 2024-05-26 / 김창근 
  - /namecard 접근 제한 기능 추가
  - login시 /namecard 접근권한 가능 기능 추가
  - 세션 만료시 자동 로그아웃 기능 추가
  - 세션 보유시 새로고침해도 로그인 정보 유지기능 추가
  - 명함 이미지 다운로드 기능 추가
  - 명함 이미지 이름 사용자 맞춤 기능 추가
