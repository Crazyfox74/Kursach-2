const {BookBasket} = require('../models/models')
const ApiError= require('../error/ApiError')
const {Book} = require('../models/models')

class BookBasketController {

    async create(req, res){
        try{
            const {BookId,basketId}=req.body
            const bookbasket = await BookBasket.create({BookId,basketId})

            return res.json(bookbasket)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
        
}

async getOne(req,res){

    const {id}=req.params
    const book=await Book.findOne(
       { where:{id}}
    )
    return res.json(book)
}
}

module.exports=new BookBasketController;