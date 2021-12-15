const Router= require('express')
const router = new Router()
const bookbasketController=require('../controllers/bookBasketController')

router.post('/',bookbasketController.create)
router.get('/:id',bookbasketController.getOne)

module.exports=router;