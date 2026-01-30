# JavaScript / TypeScript 퀴즈 학습

> 목표: 동작 원리를 정확히 이해하고 설명할 수 있는 수준

---

## AI 학습 가이드

### 역할
- AI는 퀴즈를 출제하고 피드백을 주는 **시니어 개발자**
- 사용자는 프론트엔드 + Node.js 백엔드 6년 경험자
- 체크 안 된 첫 번째 `[ ]` 항목 = 현재 학습할 주제

### 학습 진행 흐름

**1단계: 주제 확인**
```
사용자: "JS 퀴즈 줘" 또는 "오늘 어디 할 차례야"
AI: 체크 안 된 [ ] 첫 번째 항목의 주제로 퀴즈 출제
```

**2단계: 퀴즈 출제**
```
AI: 코드 스니펫 + "출력 결과는?" 또는 "왜 이렇게 동작하나?"
    - 난이도: 쉬움 → 어려움 순으로 진행
    - 한 주제당 3~5문제
```

**3단계: 답변 및 피드백**
```
사용자: [답변]
AI: 정답/오답 판정 + 상세 설명
    - 오답 시: 왜 그렇게 동작하는지 원리 설명
    - 정답 시: 추가 심화 포인트 언급
```

**4단계: 주제 완료**
```
AI: 해당 주제 3문제 이상 맞추면 [x] 체크
    사용자가 원하면 다음 주제로 이동
```

### 진행도 추적
- `[ ]` = 미완료
- `[x]` = 완료
- 체크 안 된 첫 번째 항목 = 현재 학습할 주제

---

## STEP 1. JavaScript 핵심 동작 원리

### 실행 컨텍스트와 스코프
- [x] 호이스팅 (var, let, const, function)
- [x] TDZ (Temporal Dead Zone)
- [ ] 스코프 체인
- [ ] 렉시컬 스코프

### 클로저
- [ ] 클로저 개념과 동작 원리
- [ ] 클로저 활용 패턴 (캡슐화, 커링)
- [ ] 클로저와 메모리

### this 바인딩
- [ ] 기본 바인딩
- [ ] 암시적 바인딩
- [ ] 명시적 바인딩 (call, apply, bind)
- [ ] new 바인딩
- [ ] 화살표 함수와 this

### 프로토타입
- [ ] 프로토타입 체인
- [ ] __proto__ vs prototype
- [ ] 상속 구현 (ES5 vs ES6 class)
- [ ] instanceof 동작 원리

### 비동기와 이벤트 루프
- [ ] 콜 스택과 힙
- [ ] 태스크 큐 vs 마이크로태스크 큐
- [ ] Promise 실행 순서
- [ ] async/await 동작 원리
- [ ] setTimeout(fn, 0)의 동작

### 타입 변환
- [ ] 암묵적 타입 변환
- [ ] == vs ===
- [ ] falsy/truthy 값
- [ ] 객체의 원시 타입 변환 (valueOf, toString)

---

## STEP 2. TypeScript 타입 시스템

### 기본 타입
- [ ] 타입 추론
- [ ] 타입 단언 (as, angle-bracket)
- [ ] 리터럴 타입
- [ ] 유니온 타입과 인터섹션 타입

### 타입 가드
- [ ] typeof 가드
- [ ] instanceof 가드
- [ ] in 가드
- [ ] 사용자 정의 타입 가드 (is)

### 제네릭
- [ ] 제네릭 함수
- [ ] 제네릭 인터페이스/타입
- [ ] 제네릭 제약 (extends)
- [ ] 조건부 타입
- [ ] infer 키워드

### 유틸리티 타입
- [ ] Partial, Required, Readonly
- [ ] Pick, Omit
- [ ] Record
- [ ] Exclude, Extract
- [ ] ReturnType, Parameters

### 고급 타입
- [ ] 맵드 타입
- [ ] 템플릿 리터럴 타입
- [ ] 공변성과 반공변성
- [ ] 타입 vs 인터페이스 차이

### TypeScript 5.x 신기능
- [ ] satisfies 연산자 (TS 4.9+)
- [ ] const 타입 파라미터 (TS 5.0+)
- [ ] NoInfer 유틸리티 타입 (TS 5.4+)
- [ ] Inferred Type Predicates (TS 5.5+)
- [ ] isolatedDeclarations (TS 5.5+)

---

## STEP 3. React 동작 원리

### 렌더링
- [ ] Virtual DOM 동작 원리
- [ ] 재조정(Reconciliation) 알고리즘
- [ ] 리렌더링 조건
- [ ] key의 역할

### Hooks
- [ ] useState 동작 원리 (클로저 기반)
- [ ] useEffect 실행 시점과 cleanup
- [ ] useRef vs useState
- [ ] useMemo vs useCallback
- [ ] useLayoutEffect vs useEffect

### 상태 관리
- [ ] 상태 끌어올리기 vs Context
- [ ] Context 리렌더링 문제
- [ ] 불변성이 중요한 이유

### 성능 최적화
- [ ] React.memo 동작 원리
- [ ] 불필요한 리렌더링 찾기
- [ ] 코드 스플리팅 (lazy, Suspense)

### React 19 신기능
- [ ] use API (Promise, Context 읽기)
- [ ] useActionState (폼 액션 상태 관리)
- [ ] useFormStatus (폼 제출 상태)
- [ ] useOptimistic (낙관적 업데이트)
- [ ] useEffectEvent (React 19.2+)
- [ ] Server Components 개념
- [ ] React Compiler (자동 메모이제이션)

---

## STEP 4. Node.js 동작 원리

### 이벤트 루프
- [ ] Node.js 이벤트 루프 6단계
- [ ] setImmediate vs process.nextTick
- [ ] 타이머 단계 동작

### 모듈 시스템
- [ ] CommonJS vs ESM
- [ ] require 캐싱
- [ ] 순환 참조 처리

### 스트림과 버퍼
- [ ] 스트림 종류 (Readable, Writable, Duplex, Transform)
- [ ] 백프레셔
- [ ] 버퍼 다루기

### 에러 처리
- [ ] 동기 vs 비동기 에러 처리
- [ ] uncaughtException vs unhandledRejection
- [ ] 에러 처리 패턴

### Node.js 최신 기능 (v18-22)
- [ ] 네이티브 fetch API (Node 18+)
- [ ] 네이티브 test runner (Node 18+)
- [ ] Watch 모드 (--watch)
- [ ] require() ESM 지원 (Node 22+)
- [ ] 내장 WebSocket 클라이언트 (Node 22+)
- [ ] glob/globSync 함수 (Node 22+)
- [ ] 네이티브 TypeScript 지원 (실험적)

---

## 퀴즈 예시

### 호이스팅 퀴즈 예시
```javascript
console.log(a);
console.log(b);
var a = 1;
let b = 2;
```
**질문**: 출력 결과는?

### 클로저 퀴즈 예시
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```
**질문**: 출력 결과는? 0, 1, 2를 출력하려면?

### this 퀴즈 예시
```javascript
const obj = {
  name: 'obj',
  getName: function() {
    return this.name;
  },
  getNameArrow: () => {
    return this.name;
  }
};
console.log(obj.getName());
console.log(obj.getNameArrow());
```
**질문**: 출력 결과와 이유는?

---

## 참고 자료

- 모던 자바스크립트 Deep Dive (이웅모)
- TypeScript 공식 문서
- React 공식 문서
- Node.js 공식 문서
