# 🚀 배포 가이드 - 무료 웹 호스팅

여행 계획서를 무료로 웹에 올리고 링크로 공유하는 방법

---

## 🎯 추천: GitHub Pages (완전 무료)

**장점:**
- ✅ 완전 무료
- ✅ HTTPS 자동 지원
- ✅ 커스텀 도메인 가능
- ✅ Git push만 하면 자동 배포
- ✅ 무제한 트래픽
- ✅ 한국어 완벽 지원

**URL 형식:**
```
https://yourusername.github.io/travel-plan/
```

---

## 📝 1단계: GitHub 저장소 생성

### 방법 1: 웹에서 생성

1. **GitHub 접속**: https://github.com
2. **로그인** (계정 없으면 회원가입)
3. **New repository** 클릭
4. **Repository name**: `travel-plan`
5. **Public** 선택 (무료로 사용하려면 필수)
6. **Create repository** 클릭

### 방법 2: 기존 프로젝트를 GitHub에 올리기

```bash
cd /Users/bschoi/repo/travel-plan

# Git 초기화 (아직 안 했다면)
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Travel plan v2.0"

# GitHub 원격 저장소 연결 (본인의 username으로 변경)
git remote add origin https://github.com/YOUR_USERNAME/travel-plan.git

# 업로드
git branch -M main
git push -u origin main
```

---

## ⚙️ 2단계: GitHub Pages 활성화

### 웹 UI에서 설정

1. **GitHub 저장소** 페이지로 이동
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **Branch**: `main` 선택
   - **Folder**: `/` (root) 선택
5. **Save** 클릭

### ⚡ 자동 배포 설정 (GitHub Actions)

이미 `.github/workflows/deploy.yml` 파일이 생성되어 있습니다!

**작동 방식:**
```
git push → GitHub Actions 자동 실행 → 빌드 → 배포 완료
```

**처음 한 번만 설정:**
1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**를 `GitHub Actions`로 변경
3. 완료!

이제 `git push`만 하면 자동으로 배포됩니다! 🎉

---

## 🔗 3단계: URL 확인 및 공유

### 배포 완료 확인

```bash
# 코드 push
git push origin main

# 1-2분 후 GitHub에서 확인
# Repository → Actions 탭에서 배포 진행 상황 확인
```

### 접속 URL

```
https://YOUR_USERNAME.github.io/travel-plan/
```

**예시:**
- `https://bschoi.github.io/travel-plan/`
- `https://bschoi.github.io/travel-plan/viewer.html`
- `https://bschoi.github.io/travel-plan/pdf-export.html`

### 📱 어른들께 공유하기

**카카오톡, 문자로 보내기:**
```
🇫🇷🇩🇪 프랑스-독일 여행 계획서

📖 전체 일정 보기:
https://bschoi.github.io/travel-plan/viewer.html

📄 PDF 다운로드:
https://bschoi.github.io/travel-plan/pdf-export.html

💰 예산 확인:
https://bschoi.github.io/travel-plan/budget-tracker.html
```

---

## 🌟 추가 무료 호스팅 옵션

### Option 2: Netlify (추천 #2)

**장점:**
- 완전 무료
- 더 빠른 속도
- 자동 HTTPS
- 폼 제출 가능

**배포 방법:**
```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 로그인
netlify login

# 배포
netlify deploy --prod
```

**URL:** `https://your-site-name.netlify.app`

### Option 3: Vercel

**장점:**
- 완전 무료
- 최고 속도
- 자동 HTTPS
- Serverless Functions 지원

**배포 방법:**
```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel --prod
```

**URL:** `https://your-site-name.vercel.app`

### Option 4: Cloudflare Pages

**장점:**
- 완전 무료
- 글로벌 CDN
- 무제한 트래픽

**배포:** GitHub 연동 후 자동

**URL:** `https://your-site.pages.dev`

---

## 📊 기능별 비교

| 기능 | GitHub Pages | Netlify | Vercel | Cloudflare |
|------|--------------|---------|--------|------------|
| **가격** | 무료 | 무료 | 무료 | 무료 |
| **속도** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **설정 난이도** | 쉬움 | 쉬움 | 쉬움 | 보통 |
| **트래픽 제한** | 무제한 | 100GB/월 | 100GB/월 | 무제한 |
| **빌드 시간** | 무제한 | 300분/월 | 100시간/월 | 500빌드/월 |
| **커스텀 도메인** | ✅ | ✅ | ✅ | ✅ |
| **HTTPS** | ✅ | ✅ | ✅ | ✅ |
| **한국 서버** | ❌ | ❌ | ⚠️ | ✅ |

**결론:** GitHub Pages가 가장 간단하고 안정적!

---

## 🎨 커스텀 도메인 연결 (선택사항)

### 도메인 구입
- **가비아**: 연 1만원대 (.com)
- **후이즈**: 연 1만원대
- **Cloudflare**: 연 $10

### GitHub Pages에 도메인 연결

1. **도메인 DNS 설정:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

2. **GitHub 설정:**
   - Settings → Pages → Custom domain
   - `www.yourdomain.com` 입력
   - Save

3. **완료!**
   - `https://www.yourdomain.com` 접속 가능

---

## 🔧 배포 후 설정

### package.json 수정 (GitHub Pages용)

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.1.0"
  }
}
```

### vite.config.js 수정

```javascript
export default defineConfig({
  base: '/travel-plan/',  // Repository 이름
  // ...
});
```

---

## 📱 모바일 최적화 확인

배포 후 꼭 확인하세요:

- [ ] **iPhone Safari**: https://your-url.com
- [ ] **Android Chrome**: https://your-url.com
- [ ] **카카오톡 인앱 브라우저**: 링크 공유 테스트
- [ ] **네이버 앱**: 링크 공유 테스트
- [ ] **PDF 다운로드**: 모바일에서 작동 확인

---

## 🚨 문제 해결

### 404 오류 발생 시

**원인:** SPA(Single Page Application) 라우팅 문제

**해결:**
```html
<!-- dist/404.html 생성 -->
<!-- index.html 내용 복사 -->
```

### 한글 깨짐

**확인:**
```html
<meta charset="UTF-8">
```

### PDF 다운로드 안 됨

**확인:**
- HTTPS 사용 여부
- 브라우저 팝업 차단 해제

---

## 📞 빠른 시작 가이드

### 1분 만에 배포하기

```bash
# 1. GitHub 저장소 만들기 (웹에서)

# 2. 코드 push
cd /Users/bschoi/repo/travel-plan
git init
git add .
git commit -m "Travel plan v2.0"
git remote add origin https://github.com/YOUR_USERNAME/travel-plan.git
git push -u origin main

# 3. GitHub Pages 활성화 (웹에서 Settings → Pages)

# 4. 완료! 1-2분 후 접속 가능
# https://YOUR_USERNAME.github.io/travel-plan/
```

---

## 🎯 최종 체크리스트

배포 전:
- [ ] `package.json` dependencies 설치 확인
- [ ] `npm run build` 성공 확인
- [ ] `dist/` 폴더 생성 확인

배포 후:
- [ ] 모든 페이지 로드 확인
- [ ] PDF 다운로드 테스트
- [ ] 모바일 반응형 확인
- [ ] 어른들께 링크 공유

---

## 💡 꿀팁

### 짧은 URL 만들기

**Bitly 사용:**
```
긴 URL:
https://bschoi.github.io/travel-plan/viewer.html

짧은 URL:
https://bit.ly/france-trip-2025
```

**QR 코드 생성:**
- https://qr.io
- URL 입력 → QR 생성 → 인쇄

### 카카오톡 미리보기 최적화

`index.html`의 OG 태그가 자동으로 미리보기를 예쁘게 만들어줍니다!

---

**Created**: 2025-01-17
**Updated**: 2025-01-17
**Version**: 1.0.0

🎉 **준비 완료! 이제 배포하고 어른들께 공유하세요!** 🎉
