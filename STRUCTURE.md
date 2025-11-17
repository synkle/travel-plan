# 📂 Travel Plan V2 구조 가이드

## 🎯 설계 철학

```
개발자 스럽지 않게 + 재사용 가능하게 + depth 명확하게
= Component-based Travel Planning
```

### 핵심 개념
1. **Components**: 재사용 가능한 여행 요소들
2. **Days**: 컴포넌트를 참조하는 일자별 일정
3. **Decisions**: 의사결정 과정 문서화
4. **Guides**: 여행 가이드 & 팁

---

## 📁 디렉토리 구조

```
travel-plan-v2/
│
├── README.md                    # 📘 메인 문서 (여행 개요)
├── STRUCTURE.md                 # 📘 구조 가이드 (이 문서)
│
├── decisions/                   # 🤔 의사결정 문서
│   ├── plan-comparison.md       # Plan A vs B 상세 비교
│   └── final-decision.md        # 최종 결정 과정 & 이유
│
├── components/                  # 🎨 재사용 컴포넌트 라이브러리
│   │
│   ├── vehicles/                # 차량
│   │   └── mercedes-v-class.md  # V-Class 완벽 가이드
│   │
│   ├── accommodations/          # 숙박
│   │   ├── reims-hotels.md      # Reims 호텔 옵션
│   │   ├── fussen-hotels.md     # Füssen 호텔 옵션
│   │   ├── colmar-hotels.md     # Colmar 호텔 옵션
│   │   └── paris-hotels.md      # Paris 호텔 옵션
│   │
│   ├── activities/              # 액티비티
│   │   ├── champagne-tours.md   # 샴페인 하우스 투어
│   │   ├── neuschwanstein-castle.md  # 노이슈반슈타인 성
│   │   ├── alsace-wine-route.md # 알자스 와인 루트
│   │   └── disneyland-paris.md  # 디즈니랜드
│   │
│   ├── restaurants/             # 레스토랑
│   │   ├── reims-dining.md      # Reims 식당 가이드
│   │   ├── fussen-dining.md     # Füssen 식당 가이드
│   │   ├── colmar-dining.md     # Colmar 식당 가이드
│   │   └── paris-dining.md      # Paris 식당 가이드
│   │
│   └── routes/                  # 루트
│       ├── cdg-to-reims.md      # Day 1 루트
│       ├── reims-to-fussen.md   # Day 2 루트
│       ├── fussen-to-colmar.md  # Day 4 루트
│       └── colmar-to-paris.md   # Day 6 루트
│
├── days/                        # 📅 일자별 일정 (컴포넌트 참조)
│   ├── day-01.md                # Paris → Reims
│   ├── day-02.md                # Reims → Füssen
│   ├── day-03.md                # Füssen (노이슈반슈타인 성)
│   ├── day-04.md                # Füssen → Colmar
│   ├── day-05.md                # Colmar (와인 마을)
│   ├── day-06.md                # Colmar → Paris
│   ├── day-07.md                # Paris (Disneyland)
│   ├── day-08.md                # Paris (자유)
│   └── day-09.md                # Paris (출국)
│
├── guides/                      # 📚 여행 가이드
│   ├── family-tips.md           # 6인 가족 여행 팁
│   ├── booking-guide.md         # 예약 가이드
│   ├── packing-list.md          # 짐 싸기 체크리스트
│   └── weather-guide.md         # 11월 날씨 가이드
│
└── budget/                      # 💰 예산 관리
    ├── overview.md              # 전체 예산 개요
    └── daily-breakdown.md       # 일자별 상세 예산
```

---

## 🎨 Component 사용 방법

### 컴포넌트란?
```yaml
정의:
  - 여행의 재사용 가능한 요소
  - 한 곳에서 관리, 여러 곳에서 참조

예시:
  - Mercedes V-Class (차량)
  - Neuschwanstein Castle (액티비티)
  - Reims Hotels (숙박)
```

### Day 파일에서 컴포넌트 참조
```markdown
## 🚗 교통

📦 **Component**: [`vehicles/mercedes-v-class`](../components/vehicles/mercedes-v-class.md)

**핵심 포인트**:
- 6인 + 짐 완벽 수용
- ISOFIX 2개 (7살 쌍둥이)
```

### 장점
```yaml
1. 중복 제거:
   - V-Class 정보 = 1개 파일
   - Day 1-9 모두 참조

2. 수정 용이:
   - V-Class.md 1번 수정
   - 모든 Day에 자동 반영

3. 정보 집중:
   - 호텔 옵션 = accommodations/
   - 레스토랑 = restaurants/
   - 깔끔한 정리
```

---

## 📅 Day 파일 구조

### 표준 템플릿
```markdown
# Day X: [Route] ([Date])

> **테마**: "오늘의 컨셉"
> **목표**: 오늘 달성할 것

## 📅 기본 정보
- 날짜, 이동, 거리, 숙박

## 🎯 오늘의 미션
- 핵심 목표
- 성공 지표

## ⏰ Timeline
- 시간대별 일정표

## 🚗 교통 컴포넌트
📦 Component 참조

## 🏨 숙박 컴포넌트
📦 Component 참조

## 🎨 액티비티 컴포넌트
📦 Component 참조

## 🍽️ 식사 컴포넌트
📦 Component 참조

## 📋 체크리스트
- 오늘 해야 할 일

## 💰 예산
- 오늘 비용

## ⚠️ 리스크 & 대응
- 위험 요소 & 해결책

## 👨‍👩‍👧‍👦 가족 관리 팁
- 아이들, 시니어 케어

## 📊 성공 지표
- 오늘 목표 달성도

## 🔗 관련 컴포넌트
- 링크 모음

## 🔄 연결
- 이전 Day, 다음 Day
```

---

## 🎯 각 폴더의 역할

### 1. `decisions/` - 왜 이렇게 결정했는가?
```yaml
목적:
  - 의사결정 과정 투명하게 기록
  - Plan A vs B 비교
  - 최종 선택 이유

파일:
  - plan-comparison.md (객관적 비교)
  - final-decision.md (최종 결정 문서)

사용 시기:
  - 플랜 변경 시 참조
  - "왜 이렇게 했지?" 궁금할 때
```

### 2. `components/` - 재사용 가능한 요소들
```yaml
목적:
  - 여행 요소를 컴포넌트화
  - 중복 제거, 수정 용이

하위 폴더:
  vehicles/:      렌터카 정보
  accommodations/: 호텔 옵션들
  activities/:    관광/액티비티
  restaurants/:   식당 가이드
  routes/:        이동 루트

업데이트:
  - 호텔 가격 변동 → accommodations/ 수정
  - 모든 Day 자동 반영
```

### 3. `days/` - 일자별 실행 계획
```yaml
목적:
  - 하루 단위 상세 일정
  - Components 조합

구성:
  - Timeline (시간표)
  - Component 참조
  - 체크리스트
  - 예산

특징:
  - 실행 중심 (What to do)
  - Component는 참조만
```

### 4. `guides/` - 여행 가이드북
```yaml
목적:
  - 횡단 주제 가이드
  - 전체 여행에 적용되는 팁

파일:
  - family-tips.md (6인 가족 팁)
  - booking-guide.md (예약 방법)
  - packing-list.md (짐 싸기)
  - weather-guide.md (날씨 대비)

사용 시기:
  - 출발 전 준비
  - 여행 중 참조
```

### 5. `budget/` - 돈 관리
```yaml
목적:
  - 예산 계획 & 추적

파일:
  - overview.md (전체 예산)
  - daily-breakdown.md (일자별 상세)

특징:
  - €4,200-6,000 범위
  - 항목별 세분화
```

---

## 🔄 정보 흐름

### 1. 기획 단계
```
decisions/ → README.md
          → components/
          → days/
```

### 2. 컴포넌트 작성
```
components/vehicles/mercedes-v-class.md
  ↓
days/day-01.md (참조)
days/day-02.md (참조)
...
days/day-09.md (참조)
```

### 3. 일정 실행
```
days/day-01.md
  → components/vehicles/
  → components/routes/
  → components/accommodations/
  → guides/family-tips.md
```

---

## ✏️ 수정 시나리오

### Case 1: V-Class 가격 변동
```
1. components/vehicles/mercedes-v-class.md 수정
2. 끝! (모든 Day가 자동으로 최신 정보 참조)
```

### Case 2: Day 3 일정 변경
```
1. days/day-03.md 수정
2. 필요하면 components/ 수정
3. 연관된 Day 4도 확인
```

### Case 3: 호텔 추가
```
1. components/accommodations/reims-hotels.md에 추가
2. days/day-01.md에서 자동 반영
```

---

## 🎯 Best Practices

### DO ✅
```yaml
✅ Component 한 곳에서 관리:
   - V-Class 정보 = vehicles/mercedes-v-class.md
   - Day는 참조만

✅ Day 파일 간결하게:
   - Timeline + 체크리스트 중심
   - 상세는 Component로

✅ 링크 적극 활용:
   - 📦 Component: [링크]
   - 상호 참조 명확히
```

### DON'T ❌
```yaml
❌ Day 파일에 중복 정보:
   - V-Class 설명 반복 NO
   - Component 참조로 해결

❌ Component 없이 직접 작성:
   - 재사용 가능하면 Component화
   - 예: 호텔 정보 → accommodations/

❌ 링크 없이 파일명만:
   - "mercedes-v-class 참조" (X)
   - 📦 Component: [링크] (O)
```

---

## 📊 구조의 장점

### 1. 재사용성 ⭐⭐⭐⭐⭐
```
V-Class 정보 1개 파일 → Day 1-9 참조
= 9배 효율
```

### 2. 수정 용이 ⭐⭐⭐⭐⭐
```
호텔 가격 변동 → accommodations/ 1번 수정
= 모든 Day 자동 반영
```

### 3. Depth 명확 ⭐⭐⭐⭐⭐
```
Level 1: README (개요)
Level 2: decisions/, components/, days/, guides/
Level 3: 세부 파일들
```

### 4. 개발자 스럽지 않음 ⭐⭐⭐⭐
```
용어:
  - Components (재사용 요소)
  - Days (일정)
  - Guides (가이드)
= 일반인도 이해 가능
```

---

## 🚀 시작하기

### 1. 전체 개요 파악
```
README.md 읽기
  → 여행 개요, 루트, 예산
```

### 2. 의사결정 이해
```
decisions/ 읽기
  → 왜 Plan A를 선택했는지
```

### 3. 컴포넌트 탐색
```
components/ 둘러보기
  → 차량, 호텔, 액티비티 옵션들
```

### 4. 일정 확인
```
days/ 순서대로 읽기
  → Day 1부터 Day 9까지
```

### 5. 가이드 참조
```
guides/ 읽기
  → 가족 팁, 짐 싸기, 날씨
```

---

## 💡 활용 예시

### 출발 전
```yaml
1. decisions/ 읽고 플랜 이해
2. guides/packing-list.md 따라 짐 싸기
3. guides/booking-guide.md 따라 예약
4. budget/overview.md 예산 확인
```

### 여행 중
```yaml
매일 아침:
  1. days/day-XX.md 읽기
  2. Timeline 확인
  3. 체크리스트 체크

문제 발생:
  1. components/ 참조해서 대안 찾기
  2. guides/family-tips.md 팁 활용
```

### 여행 후
```yaml
회고:
  1. 실제 비용 vs budget/ 비교
  2. 다음 여행 시 개선점
  3. 구조 그대로 재사용
```

---

**Created**: 2025-01-17
**Version**: 2.0.0
**Philosophy**: Component-based, Reusable, Clear Depth
**Target**: 6인 가족 여행 (부부 + 시니어 + 아이들)
