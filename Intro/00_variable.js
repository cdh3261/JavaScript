// 2가 출력됨. 선언은 여러번 가능. 할당은 한번
// let x = 1
// let x = 2
// x = 3
// console.log(x)

// block scope
// let x = 1

// if (x===1) {
//     let x = 2
//     console.log(x)
// }
// console.log(x)

// let은 설정만 해줘도 되지만 const는 안된다.
// let x
// const y

// const y = 9
// if (y===9){
//     let y = 20
//     console.log(y)
// }
// console.log(y)



// var : 선언, 할당이 자유롭다. / 함수 스코프
// let : 할당이 자유롭다. 선언은 한 번만 가능. / 블록 스코프
// const : 할당, 선언 둘다 한 번만 가능. / 블록 스코프

// function varTest(){
//     var x = 1
//     if (true) {
//         var x = 2
//         console.log(x)
//     }
//     console.log(x)
// }
// varTest()

// const onClick = () => {}
// let isValid = false


// class User {
//     constructor(value){
//         this.name  = value.name
//     }
// }

// const API_kEY = '1214sfa3424sd13waw2'

// const a = -5
// const c = 1.23
// const b = Infinity
// const g = NaN
// console.log(c)
// console.log(a)
// console.log(b)
// console.log(Math.sqrt(-2))

// const sentence1 = 'hello'
// const sentence2 = "hello"
// const sentence3 = `hello`

// const isValid = true


let first_name
console.log(first_name)

let last_name = null
console.log(last_name)

console.log(null==undefined) //==true ===false      
