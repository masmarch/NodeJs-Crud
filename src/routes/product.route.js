const express = require('express')
const router = express.Router()

const productController = require('../controllers/product.controller')

router.get('/', productController.getAllProducts)
router.get('/price', productController.getPriceProducts)
router.get('/:id', productController.getOneProducts)
router.post('/', productController.addProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router