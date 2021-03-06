const Router= require('express')
const router = new Router()
const languageController = require('../controllers/languageController')

router.post('/',languageController.create)
router.get('/',languageController.getAll)
router.delete('/:id',languageController.DeleteOne)


module.exports=router;