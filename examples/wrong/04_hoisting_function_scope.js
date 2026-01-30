/**
 * 호이스팅 퀴즈 #4 - 함수 스코프와 변수 섀도잉
 *
 * 문제:
 * var x = 1;
 * function foo() {
 *   console.log(x);
 *   var x = 2;
 * }
 * foo();
 *
 * 오답: 1
 * 정답: undefined
 */

// ============================================
// 원본 코드
// ============================================

var x = 1;

function foo() {
  console.log(x);  // undefined
  var x = 2;
}

foo();

// ============================================
// JS 엔진이 해석하는 순서
// ============================================

// var x = 1;
//
// function foo() {
//   var x;           // 호이스팅 - 지역 변수 x 선언 (함수 스코프)
//   console.log(x);  // undefined (지역 변수 x 참조)
//   x = 2;           // 할당
// }
//
// foo();

// ============================================
// 핵심: var는 함수 스코프 (function scope)
// ============================================

// var는 함수 단위로 스코프가 결정됨
// 함수 내부 어디서든 var로 선언하면 → 함수 최상단으로 호이스팅

// 예시:
function example() {
  console.log(y);  // undefined (호이스팅)

  if (true) {
    var y = 2;     // if 블록 안이지만, 함수 스코프라서 함수 전체에서 유효
  }

  console.log(y);  // 2
}

// ============================================
// 섀도잉 (Shadowing)
// ============================================

// 지역 변수가 상위 스코프의 동일한 이름의 변수를 "가리는" 현상
// 퀴즈에서 함수 내부의 var x가 전역 var x = 1을 가림

var globalVar = 'global';

function shadowExample() {
  var globalVar = 'local';     // 전역 globalVar를 가림
  console.log(globalVar);      // 'local'
}

shadowExample();
console.log(globalVar);        // 'global' (전역은 그대로)

// ============================================
// var vs let/const 스코프 비교
// ============================================

// | 구분       | 스코프      | 호이스팅 범위 |
// |------------|-------------|---------------|
// | var        | 함수 스코프 | 함수 최상단   |
// | let/const  | 블록 스코프 | 블록 최상단   |

// let/const는 블록 스코프:
function blockScopeExample() {
  if (true) {
    let blockVar = 'block';
    // blockVar는 이 if 블록 안에서만 유효
  }
  // console.log(blockVar);  // ReferenceError
}

// ============================================
// 실행해보기: node examples/04_hoisting_function_scope.js
// ============================================
