const express = require('express')
const router = express.Router()

const productController = require('../controllers/product.controller')

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getOneProducts)
router.get('/price', productController.getPriceProducts)
router.post('/', productController.addProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router