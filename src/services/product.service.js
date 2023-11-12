const productRepository = require('../repositories/product.repository')

class Product {
    constructor (id, name, image, price, stock) {
        this.id = id
        this.name = name
        this.image = image
        this.price = price
        this.stock = stock
    }
 }

//  dummy array data
const products = [
   new Product(1, 'Macbook Pro1', "", 5234, 0),
   new Product(2, 'Macbook Pro2', "", 6234, 10),
]
let count = products.length

exports.findAll = async () => await productRepository.findAll()

exports.findByPrice = (min, max) => products.filter((item) => item.price >= min && item.price <= max)

exports.findById = (id) => products.filter((item) => item.id == id)

exports.add = (product, file) => {    
    count += 1
    const productCreated = new Product(count, product.name, file ? file.filename : "", product.price, product.stock)
    products.push(productCreated)
    return productCreated
}

exports.update = (id, product, file) => {
    const index = products.findIndex((item) => item.id == id)
    if (!index.length) {
        const productUpdated = new Product(Number(id), product.name, file ? file.filename : products[index].image, product.price, product.stock)
        products[index] = productUpdated
        return productUpdated
    }
    return null
}

exports.remove = (id) => {
    const index = products.findIndex((item) => item.id == id)
    if (!index.length) {
        products.splice(index, 1)
        return 1
    }
    return 0
}