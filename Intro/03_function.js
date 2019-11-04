// // 1.함수 선언식
// function add(num1, num2) {
//     return num1 + num2
// }
// console.log(add(2,4))

// // 2.함수 표현식
// const sub = function(num1, num2) {
//     return num1 - num2
// }
// console.log(sub(10,2))


// // 함수 표현식
// const ssafy1 = function(name) {
//     console.log(`hello ${name}`)
// }
// ssafy1('change')


// // 3.화살표 함수(arrow function)
// const ssafy2 = (name) => {
//     console.log(`hello ${name}`)
// }
// ssafy2('dongho')
// // 화살표 함수 소괄호 생략, 매개변수가 하나 일 때
// const ssafy3 = name => {
//     console.log(`hello ${name}`)
// }
// ssafy3('donghoooooo')
// // 중괄호 생략, 표현식이 하나 일 때
// const ssafy4 = name => `hello ${name}`
// console.log(ssafy4('donghoooooooooo'))

// arrow 연습
// let square = function(num) {
//     return num ** 2
// }
// let square2 = (num) => {
//     return num**2
// }
// let square3 = num => {
//     return num**2
// }
// let square4 = num => num**2
// console.log(square(1))
// console.log(square2(2))
// console.log(square3(3))
// console.log(square4(4))

// let noArgs = () => 'no args'
// console.log(noArgs())
// let noArgs2 = _ => 'no args'
// console.log(noArgs())

// const a = {}
// console.log(typeof a)
// //오브젝트를 만나면 소괄호나 중괄호로 감싸준다.
// let returnObject = () => ({key:'value'})

// 변수에 아무것도 넣지 않을 때
// const hello = (name='noName') => `hello ${name}`
// console.log(hello())

// [4].익명함수 -> 함수 표현식이랑 같은 것이다.
(function (name) {
    console.log(name)
})("change")