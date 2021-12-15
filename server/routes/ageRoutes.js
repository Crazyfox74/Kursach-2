const Router= require('express')
const router = new Router()
const agesController= require('../controllers/ageController')

router.post('/',agesController.create)
router.get('/',agesController.getAll)
router.delete('/:id',agesController.DeleteOne)


module.exports=router;