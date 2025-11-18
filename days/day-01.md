# Day 1: Paris → Disney Villa (2025.11.21 금)

> **테마**: "디즈니 별장에서 시작하는 유럽 여행"
> **목표**: 안전 도착 + 첫날 체력 관리 + 가족 휴식

---

## 📅 기본 정보

**날짜**: 2025년 11월 21일 (금요일)
**이동**: Paris CDG Airport → Disney Villa (디즈니 근처)
**거리**: 약 50km (1시간)
**숙박**: Disney Villa (1박)

---

## 🎯 오늘의 미션

```yaml
핵심 목표:
  1. 무사히 디즈니 별장 도착 (20:00-20:30)
  2. Renault Trafic 안전 인수
  3. 6인 가족 첫날 체력 관리
  4. 별장에서 편안한 휴식

성공 지표:
  ✅ 비행기 정시 도착
  ✅ 렌터카 인수 완료
  ✅ 20:30 전 별장 체크인
  ✅ 가족 휴식 및 23:00 취침 (내일 일찍 출발)
```

---

## ⏰ Timeline

| Time | Activity | Location | Duration | Notes |
|------|----------|----------|----------|-------|
| 17:00 | ✈️ CDG 공항 도착 (TW0401) | Terminal 2E/2F | - | 입국심사 |
| 17:00-18:30 | 🛂 입국심사 & 수하물 | CDG | 1.5h | 6인 가족, 여유 |
| 18:30 | 🛒 저녁 식사 구매 | CDG Carrefour | 15min | 별장 저녁 재료 |
| 18:45 | 🚗 렌터카 픽업 (예약: 17:00) | Europcar T1 | 30min | Renault Trafic 9인승 |
| 19:15-19:30 | 🧳 짐 적재 & 준비 | Parking | 15min | 6인 짐 정리 |
| 19:30 | 🚗 출발 | A4 고속도로 | - | Disney Villa 향발 |
| 20:15-20:30 | 🏡 별장 도착 & 체크인 | Disney Villa | 15min | 체크인, 짐 정리 |
| 20:30-21:30 | 🍽️ 저녁 준비 & 식사 | Villa 주방 | 1h | 가족 함께 요리 |
| 21:30-22:30 | 🎮 가족 시간 | Villa | 1h | 게임, Netflix, 휴식 |
| 22:30 | 🛁 씻기 & 준비 | Villa | 30min | 아이들 먼저 |
| 23:00 | 😴 취침 | Villa | - | 내일 대비 |

---

## 🚗 교통 컴포넌트

### 사용 차량
📦 **Component**: [`vehicles/renault-trafic`](../components/vehicles/renault-trafic.md) ✅ 실제 예약
📋 **Booking**: [`rental-booking-confirmed`](../guides/rental-booking-confirmed.md)
💡 **참고**: [`vehicles/mercedes-v-class`](../components/vehicles/mercedes-v-class.md) (계획 단계)

**예약 차량**: Renault Trafic (LVAR) 9인승 or similar
- 예약번호: 1196637466
- 픽업: CDG Terminal 1, 17:00 (항공편: TW0401)
- 9인승 (6인 가족 충분)
- 자동 변속기
- 에어컨
- 무제한 마일리지 ✅

**포함 사항**:
- Cross-Border Coverage ✅ (독일 주행 가능)
- Additional Driver ✅
- Environmental contribution ✅

### 오늘의 루트
📦 **Component**: [`routes/cdg-to-disney-villa`](../components/routes/cdg-to-disney-villa.md)

```yaml
Route: Paris CDG → Disney Villa
Distance: 약 50km
Highway: A4 Autoroute
Duration: 1h (직통, 휴게소 없음)
Tolls: €5-10

특징:
  - 첫날 최적 거리 (매우 짧음!)
  - 간단한 고속도로 (쉬움)
  - 짧은 거리로 휴게소 불필요
  - 별장 도착 후 충분한 휴식 시간
```

**주요 포인트**:
1. CDG Rental Center → A4 진입 (10min)
2. A4 동쪽 방향 (Marne-la-Vallée 방향)
3. Exit 14 (Disneyland Paris 출구)
4. 별장 주소로 이동 (약 10분)
5. 20:15-20:30 별장 도착

---

## 🏨 숙박 컴포넌트

📦 **Component**: [`accommodations/disney-villa`](../components/accommodations/disney-villa.md)

### 디즈니 근처 별장 (Airbnb 예약)

**예약 링크**: [Airbnb - Disney Villa](https://www.airbnb.co.kr/rooms/1257213581490943640)

```yaml
숙소명: 아늑한 정원 테라스와 식사 옵션이 있는 별장. 디즈니
숙소 유형: 별장 (Vacation Rental)
위치: 디즈니랜드 파리 근처

침실 구성:
  - 침실 2개 (큰 침실)
  - 침대 구비
  - 욕실 포함

주요 편의시설:
  - ✅ 완비된 주방 (식기세척기, 타시모 커피 메이커, 필터)
  - ✅ 세탁기, 건조기
  - ✅ 게임, Netflix, Disney+ 스트리밍
  - ✅ 유아용품 구비

야외 시설:
  - 🌳 정원
  - 🏡 테라스 2개
  - 🍖 바비큐 시설
  - 🚗 전용 주차장

특별 혜택:
  - 반려동물 동반 가능
  - 무료 바구니 및 환대용품

가족 친화:
  - 7살 쌍둥이 게임/Netflix 즐김
  - 주방에서 가족 요리 가능
  - 넓은 정원에서 아이들 놀이
  - 어른들 테라스에서 휴식
```

**체크인 정보**:
- 예상 도착: 20:15-20:30
- 호스트 사전 연락 필수
- 주차장 9인승 차량 가능 확인

---

## 🍽️ 식사 컴포넌트

📦 **Component**: [`restaurants/disney-villa-dining`](../components/restaurants/disney-villa-dining.md)

### 저녁 (20:30-21:30, 별장 주방 요리)

**추천: 공항 구매 + 별장 요리** ⭐⭐⭐
```yaml
이유:
  - 별장에 완비된 주방 활용
  - 가족 함께 요리하며 첫날 추억
  - 아이들 참여 가능 (간단한 요리)
  - 시니어분들도 편안한 식사
  - 비용 절약 + 건강한 식사

장소:
  - CDG Terminal 2 Carrefour (24h)
  - CDG Relay 편의점들

구매 목록 (6인 가족):
  주재료:
    - 파스타 면 & 소스 (또는 즉석 요리)
    - 빵, 버터
    - 치즈, 햄
    - 신선 샐러드 재료

  간식 & 음료:
    - 과일 (사과, 오렌지, 포도)
    - 요거트
    - 물, 주스, 우유
    - 스낵 (아이들용)

  조식 재료 (내일 아침):
    - 시리얼, 우유
    - 빵, 잼
    - 계란
    - 커피 (별장에 타시모 있음)

비용: €50-80 (6인, 저녁+아침)
타이밍: 렌터카 픽업 전 구매 (18:30)
```

**별장 주방 활용**:
```yaml
시설:
  - 식기세척기 (설거지 간편!)
  - 타시모 커피 메이커
  - 필터 완비
  - 조리 도구 구비

요리 플랜:
  - 20:30 도착 후 간단히 요리
  - 파스타 or 샐러드 중심
  - 아이들: 빵 + 치즈 + 햄
  - 어른들: 파스타 + 샐러드
  - 30-40분 내 완성 가능

장점:
  - 가족 함께하는 시간
  - 비용 절약 (€30-40)
  - 건강한 재료 선택
  - 7살 쌍둥이 참여 가능
```

**백업 플랜: 주변 레스토랑 배달**
```yaml
이유: 너무 피곤할 경우
서비스: Uber Eats, Deliveroo
옵션: 피자, 버거, 프렌치
비용: €60-100 (6인, 배달비 포함)
```

---

## 📋 체크리스트

### 출발 전 (한국)
- [ ] 여권 6개 확인 (유효기간 6개월+)
- [ ] 국제면허증 + 한국 면허증
- [ ] 렌터카 예약 확인서 출력
- [ ] Disney Villa Airbnb 예약 확인서
- [ ] 유심/eSIM 개통
- [ ] 유로화 현금 €500-1,000
- [ ] 카시트 2개 (ISOFIX)

### 공항 도착 후
- [ ] 입국심사 서류 (여권, Airbnb 예약서, 귀국 항공권)
- [ ] 수하물 수령 확인 (6인 짐 전부)
- [ ] **식재료 구매** (CDG Carrefour/Relay, 18:30)
  - 저녁: 파스타, 빵, 치즈, 햄, 샐러드
  - 조식: 시리얼, 우유, 빵, 잼, 계란
  - 음료: 물, 주스, 커피
  - 예산: €50-80 (저녁+아침, 6인)
- [ ] Rental Center 셔틀 탑승

### 렌터카 픽업 (Europcar CDG T1)
- [ ] 예약 확인서 지참 (예약번호: 1196637466)
- [ ] 여권 제시
- [ ] 국제면허증 + 한국 면허증 제시
- [ ] 신용카드 제시 (€998.46 차단)
- [ ] 렌탈 계약서 서명
- [ ] 차량 외부 사진/동영상 촬영 (필수!)
- [ ] 내부 상태 확인
- [ ] ISOFIX 위치 확인 (9인승 차량)
- [ ] 연료 Full 확인 (게이지 사진)
- [ ] 주행거리계 사진
- [ ] 비상 장비 확인 (삼각대, 조끼)
- [ ] GPS 설정 (Reims 호텔 주소)
- [ ] 긴급 연락처 저장 (+33 977403257)

### 별장 체크인
- [ ] 호스트 사전 연락 확인 (도착 시간 20:15-20:30)
- [ ] 주차장 위치 확인 (9인승 주차 가능)
- [ ] 침실 2개 + 침대 구성 확인
- [ ] 주방 시설 확인 (식기세척기, 커피 메이커)
- [ ] Netflix/Disney+ 로그인 확인
- [ ] 게임 및 유아용품 확인

---

## 💰 예산

| 항목 | 비용 | 비고 |
|------|------|------|
| 렌터카 (8일) | €898.46 | Renault Trafic (확정) |
| 렌터카 보증금 | €998.46 | 신용카드 차단 (반납 후 해제) |
| 고속도로 통행료 | €5-10 | CDG → Disney Villa |
| 연료 | €8-12 | 50km |
| Disney Villa (1박) | 미정 | Airbnb 예약 확인 필요 |
| 식재료 (저녁+조식) | €50-80 | CDG Carrefour |
| **Day 1 Total** | **€961-1,000** + Villa 숙박비 | 보증금 제외 실비용 |

---

## ⚠️ 리스크 & 대응

| 리스크 | 확률 | 영향 | 대응 방법 |
|--------|------|------|-----------|
| 항공편 지연 | Medium | High | 호스트 사전 연락, 늦은 체크인 조율 |
| 짐 분실 | Low | High | 귀중품 기내 수하물 |
| 렌터카 지연 | Low | Medium | 예약 확인서, 호스트 연락 |
| 야간 운전 피로 | Low | Low | 거리 짧음 (50km), 1시간 이내 |
| 아이들 피곤 | High | Low | 별장 도착 후 바로 휴식 |
| 식재료 부족 | Low | Medium | 공항 충분히 구매 or 배달 앱 |
| 별장 체크인 문제 | Low | Medium | 호스트 연락처 저장, 사전 연락 |

---

## 👨‍👩‍👧‍👦 가족 관리 팁

### 7살 쌍둥이
```yaml
비행 중:
  - 태블릿 충전 완료
  - Netflix 다운로드
  - 간식 준비

렌터카:
  - ISOFIX 카시트 바로 설치
  - 뒷좌석 엔터테인먼트

별장:
  - 도착 후 게임/Netflix 즐기기
  - 정원에서 놀기 (날씨 좋으면)
  - 저녁 요리 참여 (빵에 치즈 올리기 등)
  - Disney+ 보며 휴식
  - 일찍 취침
```

### 장인어른 + 장모님
```yaml
공항:
  - 느긋하게 입국심사
  - 짐 찾는 동안 휴식

렌터카:
  - 2열 독립 시트 (편안)
  - 온도 개별 조절

별장:
  - 테라스에서 휴식
  - 정원 산책
  - 편안한 저녁 식사
  - 일찍 휴식
```

---

## 📊 성공 지표

### 오늘의 목표 달성도
```yaml
✅ 안전 도착: 20:15-20:30 Disney Villa
✅ Renault Trafic 인수: 문제없이 완료
✅ 가족 컨디션: 별장에서 편안한 휴식
✅ 별장 체크인: 20:30 전 완료
✅ 저녁: 가족 함께 요리하며 추억 만들기
✅ 취침: 23:00 목표

내일 준비:
  - 09:00 Füssen 향발 (약 680km 장거리)
  - 일찍 일어나기 (07:00 조식, 별장 주방)
  - 체력 회복 중요
```

---

## 📝 Notes

### 첫날 전략
```
파리 시내 건너뛰고 디즈니 근처 별장으로
= 짧은 이동 (50km, 1h)
= 별장에서 충분한 휴식
= 가족 요리로 첫날 추억 만들기
= 6인 가족 첫날 Best 선택
```

### 별장 숙박 장점
```yaml
체력 관리:
  - 호텔보다 넓고 편안
  - 아이들 자유롭게 활동
  - 시니어분들 테라스 휴식

비용 절약:
  - 주방 활용 (저녁+조식)
  - 호텔 룸서비스 대비 저렴

가족 시간:
  - Netflix/Disney+ 함께 보기
  - 게임 즐기기
  - 정원에서 놀기
```

### 내일 대비
```yaml
Day 2 Preview:
  - 07:00 조식 (별장 주방)
  - 08:00 체크아웃
  - 09:00 Füssen 향발 (약 680km, 7-8h)
  - 가장 긴 이동 날 (알프스로!)
  - 일찍 출발 필수!

오늘 할 일:
  - 일찍 취침 (23:00)
  - 짐 미리 정리
  - 내일 아침 조식 준비 (냉장고 확인)
```

---

## 🔗 관련 컴포넌트

- 🚗 [Renault Trafic 9인승](../components/vehicles/renault-trafic.md) (실제 예약) ✅
- 💡 [Mercedes V-Class](../components/vehicles/mercedes-v-class.md) (계획 단계 참고)
- 🛣️ [CDG → Disney Villa 루트](../components/routes/cdg-to-disney-villa.md)
- 🏨 [Disney Villa Airbnb](../components/accommodations/disney-villa.md)
- 🍽️ [Disney Villa 식사 가이드](../components/restaurants/disney-villa-dining.md)

---

## 🔄 연결

**이전**: 없음 (첫날)
**다음**: [Day 2 - Reims → Füssen](./day-02.md)

---

**Status**: ✅ Plan Confirmed
**Created**: 2025-01-17
**Version**: 2.0.0 (Component-based)
**Weather**: 5-10°C (쌀쌀, 겨울옷 필요)
