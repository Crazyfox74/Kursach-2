const Router= require('express')
const router = new Router()
const publisherController = require('../controllers/publisherController')

router.post('/',publisherController.create)
router.get('/',publisherController.getAll)
router.delete('/:id',publisherController.DeleteOne)


module.exports=router;