const me = {
    name: 'change',
    'phone number': '123123321',
    product: {
        phone: 'iphone',
        notebook: 'mac',
    }
}

// console.log(me.name)
// console.log(me['name'])
// console.log(me.product.notebook)


let books = ['javascript', 'python']
let comics = {
    DC: ['Aqua','Super'],
    Marvle: ['Avengers', 'IronMan'],
}

let bookStore = {
    books: books,
    comics: comics
}
console.log(bookStore)


// JSON
const jsonData = JSON.stringify(me)
console.log(jsonData)

const parseData = JSON.parse(jsonData)
console.log(parseData)