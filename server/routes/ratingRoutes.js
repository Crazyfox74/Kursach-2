const Router= require('express')
const router = new Router()
const ratingController = require('../controllers/ratingController')

router.post('/',ratingController.create)
router.get('/',ratingController.getAll)
router.delete('/:id',ratingController.DeleteOne)


module.exports=router;