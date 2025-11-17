# Day 1: Paris → Reims (2025.11.21 금)

> **테마**: "샴페인으로 시작하는 유럽 여행"
> **목표**: 안전 도착 + 첫날 체력 관리

---

## 📅 기본 정보

**날짜**: 2025년 11월 21일 (금요일)
**이동**: Paris CDG Airport → Reims
**거리**: 150km (2시간)
**숙박**: Reims (1박)

---

## 🎯 오늘의 미션

```yaml
핵심 목표:
  1. 무사히 Reims 도착 (21:00-21:30)
  2. V-Class 안전 인수
  3. 6인 가족 첫날 체력 관리
  4. 내일 샴페인 투어 준비

성공 지표:
  ✅ 비행기 정시 도착
  ✅ 렌터카 인수 완료
  ✅ 22:00 전 호텔 체크인
  ✅ 23:00 취침 (내일 일찍 출발)
```

---

## ⏰ Timeline

| Time | Activity | Location | Duration | Notes |
|------|----------|----------|----------|-------|
| 17:00 | ✈️ CDG 공항 도착 (TW0401) | Terminal 2E/2F | - | 입국심사 |
| 17:00-18:30 | 🛂 입국심사 & 수하물 | CDG | 1.5h | 6인 가족, 여유 |
| 18:30 | 🛒 저녁 식사 구매 | CDG Carrefour | 15min | 공항 사전 구매 |
| 18:45 | 🚗 렌터카 픽업 (예약: 17:00) | Europcar T1 | 30min | Renault Trafic 9인승 |
| 19:15-19:30 | 🧳 짐 적재 & 준비 | Parking | 15min | 6인 짐 정리 |
| 19:30 | 🚗 출발 | A4 고속도로 | - | Reims 향발 |
| 20:30-20:45 | 🛑 휴게소 휴식 | A4 Aire de repos | 15min | 스트레칭, 화장실 |
| 21:15-21:45 | 🏨 Reims 도착 | Hotel | - | 체크인 |
| 22:00 | 🍽️ 저녁 | Hotel | 30min | 호텔 룸서비스 or 사전구매 |
| 23:00 | 😴 취침 | Hotel | - | 내일 대비 |

---

## 🚗 교통 컴포넌트

### 사용 차량
📦 **Component**: [`vehicles/mercedes-v-class`](../components/vehicles/mercedes-v-class.md)
📋 **Booking**: [`rental-booking-confirmed`](../guides/rental-booking-confirmed.md)

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
📦 **Component**: [`routes/cdg-to-reims`](../components/routes/cdg-to-reims.md)

```yaml
Route: Paris CDG → Reims
Distance: 150km
Highway: A4 Autoroute (직통)
Duration: 2h 15min (휴게소 포함)
Tolls: €10-15

특징:
  - 첫날 최적 거리 (짧음)
  - 직선 고속도로 (쉬움)
  - 야간 운전이지만 2시간 이내
  - 중간 휴게소 15분 휴식 (체력 관리)
```

**주요 포인트**:
1. CDG Rental Center → A4 진입 (10min)
2. A4 직진 (Reims 방향)
3. **1시간 후 휴게소 휴식** (20:30-20:45, 15min)
   - 스트레칭, 화장실
   - 시니어/아이들 다리 풀기
   - 운전자 교대 가능
4. Exit 23 (Reims Centre)
5. 호텔 도착

---

## 🏨 숙박 컴포넌트

📦 **Component**: [`accommodations/reims-hotels`](../components/accommodations/reims-hotels.md)

### 추천 호텔 (6인 가족)

**Option 1: Avenue de Champagne 근처** (추천 ⭐)
```yaml
Area: 샴페인 하우스 근처
Price: €120-180/night
Rooms: Family suite or 2x Triple

장점:
  - 내일 샴페인 투어 편리
  - 주차 무료
  - 조용함

체크인:
  - Late check-in 사전 연락 (21:00-22:00)
  - 주차장 V-Class 확인
```

**Option 2: Reims Centre**
```yaml
Area: 대성당 근처
Price: €150-200/night
Rooms: 2x Triple or Family suite

장점:
  - 도보 시내 탐방
  - 레스토랑 많음

단점:
  - 주차비 별도 (€15-20)
```

---

## 🍽️ 식사 컴포넌트

📦 **Component**: [`restaurants/reims-dining`](../components/restaurants/reims-dining.md)

### 저녁 (22:00, Late dinner)

**추천: Option 1 - 공항 사전 구매** ⭐
```yaml
이유:
  - Reims 대형마트 21:30 전후 마감
  - 도착 시간(21:15-21:45)과 충돌 위험
  - 아이들 피곤 (비행 + 이동)
  - 시니어 휴식 필요

장소:
  - CDG Terminal 2 Carrefour (24h)
  - CDG Relay 편의점들

구매:
  - 샌드위치, 샐러드
  - 과일, 요거트
  - 물, 주스
  - 간단한 디저트

비용: €40-60 (6인, 공항 프리미엄)
타이밍: 렌터카 픽업 전 구매 (18:30)
```

**Option 2: 호텔 룸서비스/인룸 다이닝**
```yaml
이유:
  - 가장 편리한 대안
  - 아이들 바로 휴식 가능
  - 사전 주문 가능

타이밍:
  - 체크인 시 주문
  - 22:00 배달 요청

비용: €80-120 (6인, 서비스 차지 포함)
```

**Option 3: 24h 편의형 매장** (백업 플랜)
```yaml
Name: Carrefour City / Casino Shop
Hours: 07:00-23:00 or 24h
Location: Reims 시내 일부 지점

장점:
  - 늦은 시간 가능
  - 호텔에서 가까움

단점:
  - 선택지 제한적
  - 대형마트 대비 가격 높음
```

---

## 📋 체크리스트

### 출발 전 (한국)
- [ ] 여권 6개 확인 (유효기간 6개월+)
- [ ] 국제면허증 + 한국 면허증
- [ ] 렌터카 예약 확인서 출력
- [ ] Reims 호텔 예약 확인서
- [ ] 유심/eSIM 개통
- [ ] 유로화 현금 €500-1,000
- [ ] 카시트 2개 (ISOFIX)

### 공항 도착 후
- [ ] 입국심사 서류 (여권, 호텔 예약서, 귀국 항공권)
- [ ] 수하물 수령 확인 (6인 짐 전부)
- [ ] **저녁 식사 구매** (CDG Carrefour/Relay, 18:30)
  - 샌드위치, 샐러드, 과일, 음료
  - 예산: €40-60 (6인)
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

### 호텔 체크인
- [ ] Late check-in 사전 연락 확인
- [ ] 주차장 위치 확인
- [ ] 6인 Room configuration 확인
- [ ] 내일 아침 조식 시간 확인

---

## 💰 예산

| 항목 | 비용 | 비고 |
|------|------|------|
| 렌터카 (8일) | €898.46 | Renault Trafic (확정) |
| 렌터카 보증금 | €998.46 | 신용카드 차단 (반납 후 해제) |
| 고속도로 통행료 | €10-15 | CDG → Reims |
| 연료 | €15-20 | 150km |
| Reims 호텔 (1박) | €120-180 | 6인 |
| 저녁 (공항 구매) | €40-60 | CDG Carrefour |
| **Day 1 Total** | **€1,084-1,174** | 보증금 제외 실비용 |

---

## ⚠️ 리스크 & 대응

| 리스크 | 확률 | 영향 | 대응 방법 |
|--------|------|------|-----------|
| 항공편 지연 | Medium | High | 호텔 늦은 체크인 사전 연락 |
| 짐 분실 | Low | High | 귀중품 기내 수하물 |
| 렌터카 지연 | Low | Medium | 예약 확인서, 영문 주소 |
| 야간 운전 피로 | Low | Medium | 휴게소 15분 휴식, 교대 운전 |
| 아이들 피곤 | High | Low | 공항 사전 구매, 일찍 취침 |
| 슈퍼마켓 마감 | Medium | Low | 공항 구매 or 룸서비스 |

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

호텔:
  - 바로 씻기고 취침
  - 내일 일정 간단히 설명 (샴페인 투어!)
```

### 장인어른 + 장모님
```yaml
공항:
  - 느긋하게 입국심사
  - 짐 찾는 동안 휴식

렌터카:
  - 2열 독립 시트 (편안)
  - 온도 개별 조절

호텔:
  - 일찍 휴식
  - 다리 마사지
```

---

## 📊 성공 지표

### 오늘의 목표 달성도
```yaml
✅ 안전 도착: 21:00-21:30 Reims
✅ V-Class 인수: 문제없이 완료
✅ 가족 컨디션: 피곤하지만 관리 가능
✅ 호텔 체크인: 22:00 전 완료
✅ 취침: 23:00 목표

내일 준비:
  - 09:00 Füssen 향발 (630km 장거리)
  - 일찍 일어나기 (07:00 조식)
  - 체력 회복 중요
```

---

## 📝 Notes

### 첫날 전략
```
파리 시내 건너뛰고 바로 Reims로
= 체력 관리 + 시간 절약
= 6인 가족 첫날 Best 선택
```

### 내일 대비
```yaml
Day 2 Preview:
  - 07:00 조식 & 체크아웃
  - 09:00 Füssen 향발 (630km, 7-8h)
  - 가장 긴 이동 날 (알프스로!)
  - 일찍 출발 필수!

오늘 할 일:
  - 일찍 취침 (23:00)
  - 짐 미리 정리
  - 내일 아침 조식 확인
```

---

## 🔗 관련 컴포넌트

- 🚗 [Mercedes V-Class](../components/vehicles/mercedes-v-class.md)
- 🛣️ [CDG → Reims 루트](../components/routes/cdg-to-reims.md)
- 🏨 [Reims 호텔 가이드](../components/accommodations/reims-hotels.md)
- 🍽️ [Reims 식당 가이드](../components/restaurants/reims-dining.md)

---

## 🔄 연결

**이전**: 없음 (첫날)
**다음**: [Day 2 - Reims → Füssen](./day-02.md)

---

**Status**: ✅ Plan Confirmed
**Created**: 2025-01-17
**Version**: 2.0.0 (Component-based)
**Weather**: 5-10°C (쌀쌀, 겨울옷 필요)
