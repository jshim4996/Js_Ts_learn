/**
 * 호이스팅 퀴즈 #2 - 함수 선언문 vs 함수 표현식
 *
 * 문제:
 * console.log(foo);
 * console.log(bar);
 *
 * function foo() { return 1; }
 * var bar = function() { return 2; };
 *
 * 정답: [Function: foo], undefined
 */

// ============================================
// 원본 코드
// ============================================

console.log(foo);  // [Function: foo]
console.log(bar);  // undefined

function foo() { return 1; }
var bar = function() { return 2; };

// ============================================
// JS 엔진이 해석하는 순서
// ============================================

// function foo() { return 1; }  // 함수 선언 전체가 호이스팅
// var bar;                       // 선언만 호이스팅
//
// console.log(foo);  // [Function: foo]
// console.log(bar);  // undefined
//
// bar = function() { return 2; };  // 할당은 여기서

// ============================================
// 핵심 개념
// ============================================

// 1. 함수 선언문 (function foo() {})
//    - 선언 + 함수 전체가 호이스팅
//    - 선언 전에도 호출 가능

// 2. 함수 표현식 (var bar = function() {})
//    - var 호이스팅 규칙 적용
//    - 선언만 호이스팅, 함수 할당은 X
//    - 선언 전에 호출하면 TypeError (undefined는 함수가 아님)

// ============================================
// 추가 예제: 함수 표현식 호출 시도
// ============================================

// console.log(baz());  // TypeError: baz is not a function
// var baz = function() { return 3; };

// ============================================
// 실행해보기: node examples/02_hoisting_function.js
// ============================================
