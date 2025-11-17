# ⚡ 빠른 시작 가이드

어른들께 웹 링크로 공유하기까지 **5분 안에 완성!**

---

## 🎯 목표

```
GitHub에 올리기 → 무료 웹사이트 만들기 → 링크 공유
```

**최종 결과:**
- 📱 웹사이트 URL: `https://bschoi.github.io/travel-plan/`
- 💬 카톡/문자로 링크만 보내면 끝!
- 💰 비용: **완전 무료**

---

## 📝 사전 준비 (1분)

### 1. GitHub 계정 만들기
- https://github.com 접속
- **Sign up** 클릭
- 이메일, 비밀번호 입력
- 완료!

### 2. Git 설치 확인
```bash
git --version
```

없으면 설치: https://git-scm.com/downloads

---

## 🚀 1단계: GitHub 저장소 만들기 (2분)

### 웹에서 저장소 생성

1. GitHub 로그인
2. 오른쪽 상단 **+** → **New repository**
3. 입력:
   - **Repository name**: `travel-plan`
   - **Public** 선택 (무료!)
   - ☑️ **Add README** (체크 안 함)
4. **Create repository** 클릭

### 화면에 나오는 명령어 복사 (중요!)

```bash
# 예시 (본인의 것으로 나옴)
git remote add origin https://github.com/bschoi/travel-plan.git
git branch -M main
git push -u origin main
```

---

## 💻 2단계: 코드 업로드 (1분)

### 터미널에서 실행

```bash
# 프로젝트 폴더로 이동
cd /Users/bschoi/repo/travel-plan

# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: 프랑스-독일 여행 계획서 v2.0"

# GitHub에 연결 (위에서 복사한 명령어 붙여넣기)
git remote add origin https://github.com/YOUR_USERNAME/travel-plan.git

# 업로드!
git branch -M main
git push -u origin main
```

**완료!** GitHub에 코드가 올라갔습니다.

---

## 🌐 3단계: GitHub Pages 활성화 (1분)

### 웹에서 설정

1. GitHub 저장소 페이지로 이동
   ```
   https://github.com/YOUR_USERNAME/travel-plan
   ```

2. **Settings** 탭 클릭

3. 왼쪽 메뉴 → **Pages** 클릭

4. **Source** 설정:
   - **Branch**: `main` 선택
   - **Folder**: `/ (root)` 선택
   - **Save** 클릭

5. **GitHub Actions** 선택 (추천!)
   - Source를 `GitHub Actions`로 변경
   - 자동 배포 활성화

### 배포 완료 대기 (1-2분)

- **Actions** 탭에서 진행 상황 확인
- 녹색 체크 ✅ 나오면 완료!

---

## 🔗 4단계: URL 확인 및 공유 (30초)

### 접속 URL

```
https://YOUR_USERNAME.github.io/travel-plan/
```

**예시:**
```
https://bschoi.github.io/travel-plan/
```

### 페이지 목록

| 페이지 | URL | 용도 |
|--------|-----|------|
| 메인 | `/` | 시작 페이지 |
| 일정 보기 | `/viewer.html` | 전체 일정 |
| PDF 다운 | `/pdf-export.html` | PDF 생성 |
| 체크리스트 | `/checklist.html` | 준비물 체크 |
| 예산 | `/budget-tracker.html` | 예산 관리 |

---

## 📱 어른들께 공유하기

### 카카오톡 메시지 예시

```
👋 어머님, 아버님

프랑스-독일 여행 계획서를 웹으로 만들었어요!
휴대폰으로 편하게 보실 수 있습니다.

📖 여행 일정 전체 보기:
https://bschoi.github.io/travel-plan/viewer.html

📄 PDF 다운로드 (인쇄용):
https://bschoi.github.io/travel-plan/pdf-export.html

💰 예산 확인:
https://bschoi.github.io/travel-plan/budget-tracker.html

궁금하신 점 있으면 언제든 연락주세요! 😊
```

### 문자 메시지 예시

```
🇫🇷🇩🇪 프랑스-독일 여행 계획서

전체 일정:
https://bit.ly/france-2025

PDF 다운:
https://bit.ly/france-pdf
```

---

## 🔄 수정하고 다시 올리기

### 파일 수정 후

```bash
# 프로젝트 폴더에서
cd /Users/bschoi/repo/travel-plan

# 수정된 파일 추가
git add .

# 커밋
git commit -m "일정 수정: Day 3 시간 변경"

# 업로드
git push
```

**1-2분 후 자동으로 웹사이트 업데이트!** 🎉

---

## 🐛 문제 해결

### 페이지가 안 열려요

**확인 사항:**
1. GitHub Pages 활성화했는지 확인
2. 1-2분 기다리기 (배포 시간)
3. URL이 정확한지 확인

### 404 오류

**해결:**
```bash
# 브랜치 이름 확인
git branch

# main으로 변경
git branch -M main
git push -u origin main
```

### 한글이 깨져요

**확인:**
- 브라우저 인코딩: UTF-8
- 이미 설정되어 있음 (걱정 안 하셔도 됨)

### Actions 실패

**확인:**
1. GitHub → Settings → Pages
2. Source를 `GitHub Actions` 선택
3. 다시 push

---

## 💡 꿀팁

### 1. 짧은 URL 만들기

긴 URL:
```
https://bschoi.github.io/travel-plan/viewer.html
```

**Bitly 사용:**
1. https://bitly.com 접속
2. 무료 가입
3. URL 입력
4. 짧은 URL 생성!

짧은 URL:
```
https://bit.ly/france-trip-2025
```

### 2. QR 코드 만들기

1. https://qr.io 접속
2. URL 입력
3. QR 코드 다운로드
4. 인쇄해서 나눠주기!

### 3. 모바일 홈 화면 추가

**iPhone:**
1. Safari에서 열기
2. 공유 버튼 → 홈 화면에 추가
3. 앱처럼 사용!

**Android:**
1. Chrome에서 열기
2. 메뉴 → 홈 화면에 추가

---

## 📊 배포 체크리스트

### 배포 전
- [ ] `npm install` 완료
- [ ] `npm run build` 테스트
- [ ] GitHub 계정 생성
- [ ] Git 설치 확인

### 배포 중
- [ ] GitHub 저장소 생성
- [ ] 코드 push 완료
- [ ] GitHub Pages 활성화
- [ ] Actions 성공 확인

### 배포 후
- [ ] URL 접속 확인
- [ ] 모든 페이지 로드 확인
- [ ] 모바일 확인
- [ ] PDF 다운로드 테스트
- [ ] 어른들께 링크 공유

---

## 🎉 완료!

이제 인터넷만 있으면 어디서든 여행 계획서를 볼 수 있습니다!

**다음 단계:**
- [ ] 실시간 체크리스트 추가
- [ ] 예산 트래커 완성
- [ ] 긴급 연락처 페이지
- [ ] 오프라인 맵 가이드

---

**궁금한 점이 있으면 언제든 물어보세요!** 😊
