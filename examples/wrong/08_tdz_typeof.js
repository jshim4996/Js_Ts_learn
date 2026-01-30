/**
 * TDZ 퀴즈 #4 - typeof와 TDZ
 *
 * 문제:
 * typeof undeclared;
 * typeof declared;
 * let declared = 1;
 *
 * 오답: 둘 다 "undefined"
 * 정답:
 *   - typeof undeclared → "undefined"
 *   - typeof declared → ReferenceError
 */

// ============================================
// 원본 코드
// ============================================

console.log(typeof undeclared);  // "undefined"
// console.log(typeof declared);   // ReferenceError!
// let declared = 1;

// ============================================
// typeof의 특별한 동작
// ============================================

// typeof는 "안전한 연산자"로 알려져 있음
// 선언되지 않은 변수에 대해 에러 없이 "undefined" 반환

// 사용 케이스:
if (typeof jQuery !== 'undefined') {
  // jQuery가 로드된 경우에만 실행
}

if (typeof window !== 'undefined') {
  // 브라우저 환경에서만 실행 (Node.js 제외)
}

// ============================================
// 하지만 TDZ는 예외!
// ============================================

// 선언 안 됨 → "없을 수도 있다" → 안전하게 "undefined"
// TDZ → "선언했는데 초기화 전에 접근" → 버그 → 에러로 알려줌

// typeof는 TDZ에서도 에러를 던짐
// console.log(typeof x);  // ReferenceError!
// let x = 1;

// ============================================
// 정리
// ============================================

// | 상황              | typeof 결과      |
// |-------------------|------------------|
// | 선언 안 된 변수   | "undefined"      |
// | TDZ 구간 변수     | ReferenceError   |
// | 선언 후 변수      | 실제 타입 반환   |

// ============================================
// 실행해보기: node examples/wrong/08_tdz_typeof.js
// ============================================
