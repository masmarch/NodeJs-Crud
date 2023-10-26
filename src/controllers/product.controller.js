const  productService = require('../services/product.service')

exports.getAllProducts = (req, res) => res.json(productService.findAll())


exports.getPriceProducts = (req, res) => {
    const {min, max} = req.query
    res.json(productService.findByPrice(min, max))
}

exports.getOneProducts = (req, res) => {
    const result = productService.findById(req.params.id)
    if (result.length > 0) {
        res.status(200).json(result[0])        
    } else {
        res.status(404).json({})
    }
}

exports.addProduct = (req, res) => {res.status(201).json(productService.add(req.body))}

exports.updateProduct = (req, res) => {
    const result = productService.update(req.params.id, req.body)
    if (result) {
        res.json(result)
    } else {
        res.status(404).json({})
    }
}

exports.deleteProduct = (req, res) => {
    const result = productService.remove(req.params.id)
    if (result) {
        res.status(204).json()
    } else {
        res.status(404).json({})
    }
}