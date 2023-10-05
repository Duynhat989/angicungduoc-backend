const express = require('express')
const product = require('../controller/product.controller')
const verifyToken = require('../midleware/auth')
const router = express.Router()

router.post('/upload',product.upload_product)
router.post('/get',product.get_product)
module.exports = router;