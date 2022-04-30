const Router = require('express')
const router = new Router()

const basketController = require('../controllers/basketControler')

const authMiddleware = require('../middleware/authMiddleware')


router.get('/', authMiddleware , basketController.getBasketUser)
router.post('/', authMiddleware , basketController.addToBasket)


module.exports = router