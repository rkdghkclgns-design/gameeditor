# Aethelgard 실행 가이드

## 🚀 간단 실행 (Docker 없이)

### Windows 사용자
1. `start-local.bat` 파일을 더블 클릭
2. 자동으로 서버(4000)와 클라이언트(3000)가 실행됩니다
3. 브라우저가 자동으로 열립니다

### 수동 실행
```bash
# 터미널 1 - 서버 실행
cd server
npm install
npm start

# 터미널 2 - 클라이언트 실행  
cd client
npm install
npm run dev
```

## 🐳 Docker 실행 (선택사항)

Docker가 설치되어 있다면:
```bash
start.bat
```

또는
```bash
docker compose up --build
```

## 📍 접속 주소
- **메인 페이지**: http://localhost:3000
- **관제탑**: http://localhost:3000/control
- **스튜디오**: http://localhost:3000/studio/new
- **API 서버**: http://localhost:4000

## ⚠️ 문제 해결

### MongoDB 연결 오류
MongoDB가 없어도 기본 기능은 작동합니다. 완전한 기능을 위해서는:
- MongoDB 설치 또는
- MongoDB Atlas (클라우드) 사용

### 포트 충돌
다른 프로그램이 3000 또는 4000 포트를 사용 중이면:
1. 해당 프로그램 종료 또는
2. `client/package.json`과 `server/src/server.ts`에서 포트 변경

### npm 오류
```bash
# 캐시 정리
npm cache clean --force

# node_modules 삭제 후 재설치
cd server
rm -rf node_modules
npm install

cd ../client  
rm -rf node_modules
npm install
```
