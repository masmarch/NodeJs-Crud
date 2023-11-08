const productService = require('../services/product.service')
const multer = require('multer')
const multerConfig = require('../configs/multer')
const upload = multer(multerConfig.config).single(multerConfig.keyUpload)

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

exports.addProduct = (req, res) => {
    upload(req, res, (error) => {
        if (error) {
            console.log(`error: ${JSON.stringify(error)}`)
            return res.status(500).json({ message: error.message })
        }
        console.log(req.file)
        return res.status(201).json(productService.add(req.body, req.file))
    })
}

exports.updateProduct = (req, res) => {
    upload(req, res, (error) => {
        if (error) {
            console.log(`error: ${JSON.stringify(error)}`)
            return res.status(500).json({ message: error.message })
        }
        const result = productService.update(req.params.id, req.body, req.file)
        if (result) {
            res.json(result)
        } else {
            res.status(404).json({})
        }
    })
}

exports.deleteProduct = (req, res) => {
    const result = productService.remove(req.params.id)
    if (result) {
        res.status(204).json()
    } else {
        res.status(404).json({})
    }
}