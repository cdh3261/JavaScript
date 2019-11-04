const numbers = [1,2,3,4]
console.log(numbers[0])
console.log(numbers.length)

console.log(numbers)
numbers.reverse()
console.log(numbers)

numbers.push(5)
console.log(numbers)

numbers.pop()
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

numbers.shift()
console.log(numbers)

// 값을 포함하고 있는지.
console.log(numbers.includes(1))
// 인덱스, 없는 값이면 -1
console.log(numbers.indexOf(2))


console.log(numbers.join())