const express = require('express');
const router = express.Router();

const { getAll, getById, createProduct } = require('../controllers/productController');
const { verifyToken, verifyAdminToken } = require('../middleware/verifyToken');

router.get('/', verifyToken, getAll);
router.get('/find/:id', verifyToken, getById);
router.post('/create', verifyAdminToken, createProduct);

module.exports = router;
