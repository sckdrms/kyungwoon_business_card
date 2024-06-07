![image001](https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/4b6d97f5-7f1a-487a-8e28-b1490cab60aa)
* * *

# 시스템 구성도 및 사용기술 🖥
![pre1bg](https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/22d1f928-810e-4dd1-a5c3-48754dd7dc49)
![usepre1bg](https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/cdbbddf8-5fec-43b3-be06-6106b305e8cd)

* * *

# 완성 결과(PC) 👨🏻‍💻
![주석 2024-06-07 221819](https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/a7745f2c-9180-4b78-b205-4a9d9168d7ca)
![주석 2024-06-07 221756](https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/565b2403-ef47-46a7-ac3e-a02d1a2c8fa4)
![주석 2024-05-27 213722](https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/36d70291-6ce9-4dda-922a-2dfd1487177e)
![주석 2024-05-27 213731](https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/ebbddb2d-2436-4089-a19b-a8e900554e08)
![주석 2024-05-29 012059](https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/0b1294d7-4832-482b-8726-d8a7fe97f3b3)

# 완성 결과(Mobile) 👨🏻‍💻
<img src="https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/417bedf8-706b-4778-8c2a-15e65290ef88" width="200" height="400"/>
<img src="https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/01cd4b0b-df89-47c3-a8ae-88ca1acabc2c" width="200" height="400"/>

### 실제 다운로드한 명함 이미지 💳
![KYNC_김창근_학생 (4)](https://github.com/sckdrms/kyungwoon_business_card/assets/56631950/868a1892-090d-4283-a1b9-a1a4f244688a)

* * *

## 기본 수행 목표 📝 
  - ~~DateBase 연동(MySQL or MongoDB)~~ ▶ MySQL 사용
  - ~~쿠키&세션 활용~~ ▶ Login 구현
  - ~~Login 구현~~
  - ~~Route 구현~~ ▶ react-router-dom 사용
  - Pug 또는 Nunjucks를 활용한 웹 꾸미기
    
<br/>

## 추가 수행 목표 ✏
  - ~~React.js 사용~~
  - ~~GitHub branch 사용한 버전관리~~
  - ~~Sember 버저닝~~
  - ~~OAUTH 상태관리~~
  - ~~Dotenv 사용~~
  - ~~bcrypt 사용~~
  - ~~SQL Ingection 보안~~
  - ~~쿠키&세션 활용~~ ▶ Login 구현 + 세션 만료 시 자동 로그아웃
  - ~~이미지 크롭 후 사용자 맞춤 파일이름으로 저장~~
  - ~~pm2 사용~~
  - ~~모바일 반응형 디자인~~
<br/>

* * *
### npm 설치 항목 📌
* server npm install list
  - npm install express mysql mysql2 cookie-parser express-session bcrypt dotenv
    
<br/>

* client npm install list
  - npm install html2canvas three @types/three @react-three/fiber shadergradient framer-motion
    
<br/>

* * *
## semver versioning 📜

<br/>

* 0.1.0 / 2024-05-08 / 김창근
  - node.js, react.js를 사용한 기본 웹어플리케이션 업로드
<br/>

* 0.2.0 / 2024-05-11 / 김창근
  - react.js의 react-router-dom을 사용하여 route기능 추가
    
<br/>

* 0.3.0 / 2024-05-11 / 정진우
  - 로컬 데이터베이스 생성 및 서버와의 연동
  - dotenv 데이터 베이스 환경 변수 추가
  - 회원가입 기능 추가
  - 로그인 기능 추가
  - bcrypt을 사용하여 hashing기능 추가
  - express-session을 사용하여 session기능 추가
    
<br/>

* 0.3.1 / 2024-05-11 / 정진우 
  - .env 경로를 찾지못하는 문제를 dotenv.config()에 옵션을 추가하여 .env 파일의 경로를 명시적으로 지정하여 해결
<br/>

* 0.4.0 / 2024-05-25 / 김창근 
  - 로그인 시 ID부분을 email요청을 동하여 sql injection 차단
  - 로그인 했을 때 namecard에 정보기입 기능 추가
<br/>

* 0.5.0 / 2024-05-26 / 김창근 
  - /namecard 접근 제한 기능 추가
  - login시 /namecard 접근권한 가능 기능 추가
  - 세션 만료시 자동 로그아웃 기능 추가
  - 세션 보유시 새로고침해도 로그인 정보 유지기능 추가
  - 명함 이미지 다운로드 기능 추가
  - 명함 이미지 이름 사용자 맞춤 기능 추가
<br/>

* 0.5.1 / 2024-05-28 / 김창근 
  - namecard 표시 정보 순서 수정
<br/>

* 0.5.2 / 2024-06-02 / 김창근 
  - information 오타 수정
<br/>

* 0.6.0 / 2024-06-03 / 김창근 
  - main 페이지 배경 추가
<br/>

* 1.0.0 / 2024-06-03 / 정진우
  - groomide 배포
<br/>

* 1.1.0 / 2024-06-07 / 정진우
  - pm2 적용
<br/>

* 1.2.0 / 2024-06-07 / 김창근
  - 모바일 반응형 디자인 적용
<br/>
