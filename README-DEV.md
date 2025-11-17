# 🛠️ Travel Plan - 개발자 가이드

여행 계획서를 위한 인터랙티브 웹 애플리케이션 개발 가이드

---

## 📋 목차

- [프로젝트 구조](#프로젝트-구조)
- [기술 스택](#기술-스택)
- [설치 및 실행](#설치-및-실행)
- [개발 가이드](#개발-가이드)
- [빌드 및 배포](#빌드-및-배포)
- [기여 방법](#기여-방법)

---

## 🏗️ 프로젝트 구조

```
travel-plan/
├── index.html              # 메인 랜딩 페이지
├── viewer.html             # 여행 계획서 뷰어
├── pdf-export.html         # PDF 내보내기 도구
├── checklist.html          # 실시간 체크리스트
├── budget-tracker.html     # 예산 트래커
├── emergency.html          # 긴급 정보 페이지
├── offline-maps.html       # 오프라인 맵 가이드
│
├── print.css               # 프린트/PDF 최적화 스타일
├── pdf-generator.js        # Node.js PDF 생성 스크립트
├── vite.config.js          # Vite 빌드 설정
├── package.json            # 프로젝트 의존성
│
├── components/             # 재사용 컴포넌트 (마크다운)
│   ├── vehicles/
│   ├── accommodations/
│   ├── activities/
│   ├── restaurants/
│   └── routes/
│
├── days/                   # 일자별 일정 (마크다운)
│   ├── day-01.md
│   └── ...
│
├── guides/                 # 여행 가이드 (마크다운)
│   ├── family-tips.md
│   └── packing-list.md
│
├── budget/                 # 예산 관리 (마크다운)
│   └── overview.md
│
├── decisions/              # 의사결정 문서 (마크다운)
│   ├── plan-comparison.md
│   └── final-decision.md
│
├── src/                    # 소스 코드 (추후 구현)
│   ├── components/         # 웹 컴포넌트
│   ├── utils/              # 유틸리티 함수
│   └── styles/             # 스타일시트
│
├── scripts/                # 빌드/배포 스크립트
│   ├── export-pdf.js
│   └── export-all.js
│
└── dist/                   # 빌드 출력 (gitignore)
```

---

## 🔧 기술 스택

### Frontend

| 기술 | 버전 | 용도 |
|------|------|------|
| **HTML5** | - | 구조 |
| **CSS3** | - | 스타일링, 프린트 최적화 |
| **JavaScript (ES6+)** | - | 인터랙션 |
| **Vite** | ^5.0.11 | 빌드 도구 |
| **Marked** | ^11.1.1 | Markdown → HTML 변환 |
| **Chart.js** | ^4.4.1 | 예산 차트 시각화 |
| **QRCode.js** | ^1.5.3 | QR 코드 생성 |
| **html2pdf.js** | ^0.10.1 | 브라우저 PDF 생성 |
| **LocalForage** | ^1.10.0 | 오프라인 저장 |

### Backend/Build

| 기술 | 버전 | 용도 |
|------|------|------|
| **Node.js** | >=18.0.0 | 런타임 |
| **Puppeteer** | ^21.9.0 | 서버 사이드 PDF 생성 |
| **http-server** | ^14.1.1 | 로컬 개발 서버 |

### Development Tools

| 도구 | 버전 | 용도 |
|------|------|------|
| **ESLint** | ^8.56.0 | 코드 린팅 |
| **Prettier** | ^3.2.4 | 코드 포맷팅 |

---

## 🚀 설치 및 실행

### 1. 사전 요구사항

```bash
# Node.js 18+ 설치 확인
node --version

# npm 9+ 설치 확인
npm --version
```

### 2. 의존성 설치

```bash
# 프로젝트 클론
git clone <repository-url>
cd travel-plan

# 패키지 설치
npm install
```

### 3. 개발 서버 실행

```bash
# Vite 개발 서버 (Hot Module Replacement)
npm run dev

# 또는 간단한 HTTP 서버
npm run serve
```

브라우저에서 자동으로 `http://localhost:3000` 열림

### 4. PDF 생성 (Node.js)

```bash
# 전체 문서 PDF 생성
npm run pdf

# Day 1-9만 PDF 생성
npm run pdf:days

# 가이드 문서만 PDF 생성
npm run pdf:guides

# 특정 파일만 PDF 생성
npm run pdf:single -- --single=days/day-01.md
```

---

## 💻 개발 가이드

### 컴포넌트 개발 패턴

#### 1. Markdown 컴포넌트 작성

```markdown
# 📦 Component: Mercedes V-Class

## 기본 정보
- **차종**: 7인승 미니밴
- **가격**: €700-1,000 (8일)

## 특징
- ISOFIX 2개
- 대형 트렁크
```

#### 2. HTML 컴포넌트 참조

```javascript
// viewer.html에서 컴포넌트 로드
async function loadComponent(path) {
    const response = await fetch(`components/${path}.md`);
    const markdown = await response.text();
    const html = marked.parse(markdown);
    return html;
}
```

### 스타일 가이드

#### CSS 변수 사용

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --success-color: #27ae60;
    --danger-color: #e74c3c;
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans KR', sans-serif;
}
```

#### 반응형 디자인

```css
/* Mobile First */
.container {
    width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

/* Desktop */
@media (min-width: 1200px) {
    .container {
        width: 1140px;
    }
}
```

### JavaScript 패턴

#### LocalStorage 저장

```javascript
// 체크리스트 상태 저장
function saveChecklistState(data) {
    localStorage.setItem('checklist-state', JSON.stringify(data));
}

// 불러오기
function loadChecklistState() {
    const data = localStorage.getItem('checklist-state');
    return data ? JSON.parse(data) : null;
}
```

#### Async/Await 사용

```javascript
async function loadAllDays() {
    try {
        const days = [];
        for (let i = 1; i <= 9; i++) {
            const response = await fetch(`days/day-0${i}.md`);
            const text = await response.text();
            days.push(marked.parse(text));
        }
        return days;
    } catch (error) {
        console.error('Error loading days:', error);
        throw error;
    }
}
```

### PDF 최적화

#### print.css 활용

```css
@media print {
    .no-print {
        display: none !important;
    }

    .page-break-before {
        page-break-before: always;
    }

    h1, h2, h3 {
        page-break-after: avoid;
    }
}
```

#### html2pdf 옵션

```javascript
const opt = {
    margin: [10, 10, 10, 10],
    filename: 'travel-plan.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
};

html2pdf().set(opt).from(element).save();
```

---

## 🏗️ 빌드 및 배포

### 1. 프로덕션 빌드

```bash
# Vite 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

### 2. 빌드 출력

```
dist/
├── index.html
├── viewer.html
├── pdf-export.html
├── checklist.html
├── budget-tracker.html
├── emergency.html
├── offline-maps.html
├── assets/
│   ├── vendor.[hash].js
│   ├── charts.[hash].js
│   ├── utils.[hash].js
│   └── main.[hash].css
└── components/
    └── (마크다운 파일들)
```

### 3. 배포 옵션

#### GitHub Pages

```bash
# gh-pages 브랜치에 배포
npm install -g gh-pages
gh-pages -d dist
```

#### Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Vercel

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

---

## 🧪 테스트

### 수동 테스트 체크리스트

- [ ] 모든 마크다운 파일 로드 확인
- [ ] PDF 내보내기 동작 확인
- [ ] 체크리스트 LocalStorage 저장 확인
- [ ] 예산 트래커 차트 렌더링 확인
- [ ] QR 코드 생성 확인
- [ ] 모바일 반응형 확인
- [ ] 프린트 레이아웃 확인

### 브라우저 호환성

| 브라우저 | 최소 버전 | 상태 |
|----------|----------|------|
| Chrome | 90+ | ✅ 지원 |
| Firefox | 88+ | ✅ 지원 |
| Safari | 14+ | ✅ 지원 |
| Edge | 90+ | ✅ 지원 |
| IE | - | ❌ 미지원 |

---

## 📝 코드 스타일

### ESLint 설정

```json
{
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "no-console": "warn"
  }
}
```

### Prettier 설정

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

### 코드 포맷팅

```bash
# 자동 포맷팅
npm run format

# 린팅 체크
npm run lint
```

---

## 🐛 디버깅

### 개발자 도구 활용

```javascript
// 콘솔 로깅
console.log('Data:', data);
console.error('Error:', error);
console.table(arrayData);

// 성능 측정
console.time('PDF Generation');
// ... 작업 ...
console.timeEnd('PDF Generation');
```

### 네트워크 모니터링

- Chrome DevTools → Network 탭
- 마크다운 파일 로드 확인
- 404 오류 체크

---

## 🤝 기여 방법

### 브랜치 전략

```
main        # 프로덕션
develop     # 개발
feature/*   # 기능 개발
bugfix/*    # 버그 수정
```

### 커밋 메시지 규칙

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 리팩토링
test: 테스트 추가
chore: 빌드 설정 변경
```

### Pull Request

1. 브랜치 생성: `git checkout -b feature/new-feature`
2. 코드 작성 및 커밋
3. Push: `git push origin feature/new-feature`
4. GitHub에서 PR 생성
5. 코드 리뷰 후 merge

---

## 📚 추가 리소스

### 문서

- [Vite 공식 문서](https://vitejs.dev/)
- [Marked 문서](https://marked.js.org/)
- [Chart.js 문서](https://www.chartjs.org/)
- [html2pdf.js 문서](https://github.com/eKoopmans/html2pdf.js)

### 도구

- [VS Code](https://code.visualstudio.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Postman](https://www.postman.com/) (API 테스트)

---

## ⚡ 성능 최적화

### 이미지 최적화

```bash
# WebP 변환
npm install -g sharp-cli
sharp -i input.jpg -o output.webp -f webp
```

### 코드 스플리팅

```javascript
// Vite에서 자동 코드 스플리팅
const module = await import('./heavy-module.js');
```

### 캐싱 전략

```javascript
// Service Worker 캐싱
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/viewer.html',
        '/print.css',
        // ...
      ]);
    })
  );
});
```

---

## 🔒 보안

### 기본 보안 규칙

- ✅ 사용자 입력 검증
- ✅ XSS 방지 (Marked sanitize 사용)
- ✅ HTTPS 사용
- ✅ CSP (Content Security Policy) 설정

### CSP 헤더 예시

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self' 'unsafe-inline' cdn.jsdelivr.net">
```

---

## 📞 문의 및 지원

- **Email**: support@travel-plan.com
- **GitHub Issues**: [링크]
- **Documentation**: [링크]

---

**Last Updated**: 2025-01-17
**Version**: 2.0.0
**Maintainers**: Travel Planning Team
