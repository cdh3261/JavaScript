// alert('hello world')

document.write('<h1>hello world</h1>') // js에서 처리할 수 있다.

// h1태그를 가져와
// document.querySelector('h1')

// h1안에 있는 글만 뽑아온다. 뽑은 글은 바꿀 수도 있다. 새로고침하면 날라감
// document.querySelector('h1').innerText = 'bye'

// 변수 작성. 변수를 콘솔에 알려줌
//var name = "CHOI"
//console.log(name)

// var b = 30
// for (var b = 0 ; b < 10 ; b++) {
//     console.log(b)
// }
// console.log(b)

// let은 바뀜,.
let name = "CHOI dong"
document.write(name)
name = 'dongho'
document.write(name)

// const는 안바뀜
// const loca = "광주"
// document.write(loca)
// loca = "서울"
// document.write(loca)

const first_name = "change"
const last_name = "oh"

const full_name = first_name+last_name
document.write('<h1>'+full_name+'</h1>')
document.write(`<h1>${full_name}</h1>`)
console.log(`<h1>${full_name}</h1>`)

const userName = prompt("hello who are you?")
let message = ``

// ===이 파이썬의 == 과 같은것. == 는 스트링과 인트를 같다고 판단함=>내용비교인듯?
if (userName === 'change') {
    message = '<h1>admin page</h1>'
}else if (userName === 'happy') {
    message = '<h1>HAPPYYYY</h1>'
}else {
    message = `<h1>hello! ${userName} </h1>`
}

document.write(message)

const num1 = 0
const num2 = '0'
//값만비교
console.log(num1==num2)
//타입도 비교
console.log(num1===num2)