import express from 'express'
import itemController from './../controllers/itemController.js'

const router = express.Router();

router.get('/products', itemController.getAllItemLists)
router.get('/products/:id', itemController.getItembyId)
router.get('/product/category/:category', itemController.getAllItemsbyCategory)
router.get('/product/category', itemController.getAllCategories)
router.post('/product', itemController.addItem)
router.put('/product/:id', itemController.editItem)
router.delete('/product/:id', itemController.deleteItem)

export default router;