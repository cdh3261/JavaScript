// let colors = ['red','green','blue']
// for (let color of colors){
//     console.log(color)
// }

// callback 함수
// colors.forEach(function(color){
//     console.log(color)
// })

// colors.forEach(function(color,idx,array){
//     console.log(color,idx,array)
// })

// // allow함수
// colors.forEach((color) => {console.log(color)})
// // 인자가 하나라 괄호생략
// colors.forEach(color => console.log(color))


////////////////////////////////////////////////////
// function handlePosts(){
//     const posts = [
//         {id:50, title:'javascript'},
//         {id:100, title:'python'},
//         {id:123, title:'css'}
//     ]
//     for (let i = 0; i < posts.length; i++){
//         console.log(posts[i])
//         console.log(posts[i].id)
//         console.log(posts[i].title)
//     }
// }
// handlePosts()

// function handlePosts(){
//     const posts = [
//         {id:50, title:'javascript'},
//         {id:100, title:'python'},
//         {id:123, title:'css'}
//     ]
//     posts.forEach((post)=>{
//         console.log(post), 
//         console.log(post.id), 
//         console.log(post.title)
//     })
    
// }
// handlePosts()

// const images = [
//     {height:10, width:20},
//     {height:14, width:25},
//     {height:50, width:15},
// ]
// const areas = []
// images.forEach(image=>areas.push(image.height*image.width))
// console.log(areas)


////// map함수////////

// const numbers = [1,2,3,4,5]
// const doubleNumbers = []

// numbers.forEach(function(number){
//     doubleNumbers.push(number*2)
// })

// const double = numbers.map(function(number){
//     return number*2
// })
// console.log(double)

// const double = numbers.map(number=>number*2)
// console.log(double)

// const images = [
//     {height:10, width:20},
//     {height:14, width:25},
//     {height:50, width:15},
// ]
// const areas = images.map(image => {return image.height*image.width})
// console.log(areas)


//// filter함수
// const numbers = [1,2,3,4,5]
// const even = numbers.filter(function(number){
//     return number%2 === 0
// })
// console.log(even)

// const products = [
//     {name: 'cucumber', type:'vegetable'},
//     {name: 'banana', type:'fruit'},
//     {name: 'carrot', type:'vegetable'},
//     {name: 'melon', type:'fruit'}
// ]

// const fruits = products.filter(fruit=>fruit.type==='fruit')
// // // const fr = [] 
// // // fruits.forEach(fru=>fr.push(fru.name))
// // // console.log(fr)
// console.log(fruits[0].name,fruits[1].name)


//// accumulator 함수 reduce()
// const scores = [100,80,88,92,95,70]
// const total = scores.reduce((total,score)=>{
//     return total += score
// }, 0) // 토탈을 0으로 초기화
// console.log(total)



//// find함수
// const users = [
//     {name:'dongho',location:'Bs'},
//     {name:'change',location:'Gj'},
//     {name:'tak',location:'Dg'},
//     {name:'junho',location:'Su'},
//     {name:'neo',location:'ABC'}
// ]
// // find는 하나 찾으면 나옴.
// const user = users.find(function(user){
//     return user.name === 'neo'
// })
// console.log(user)