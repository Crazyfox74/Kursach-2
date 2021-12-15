const {Book}=require('../models/models')
const uuid=require('uuid')
const path =require('path')
const { nextTick } = require('process')
const ApiError= require('../error/ApiError')
class BookController {
    async create(req, res){
            try{
                const {name,price,genreId,publisherId,typeId,authorId,ageId,languageId,ratingId}=req.body
                const {img} = req.files
                let fileName=uuid.v4()+ ".jpg"
                img.mv(path.resolve(__dirname,'..','static', fileName))


    
                const book = await Book.create({name,price,genreId,publisherId,img:fileName,typeId,authorId,ageId,languageId,ratingId})
    
                return res.json(book)
            } catch (e) {
                next(ApiError.badRequest(e.message))
            }
            
            
    }

    async getAll(req, res) {
            let{genreId,publisherId,limit,page}=req.query
            page=page||1
            limit=limit||9
            let offset=page*limit-limit
            let books;
            if(!genreId && !publisherId){
                books=await Book.findAndCountAll({limit,offset})
            }
            if(genreId && !publisherId){
                books= await Book.findAndCountAll({where:{genreId},limit,offset})
            }
            if(!genreId && publisherId){
                books= await Book.findAndCountAll({where:{publisherId},limit,offset})
            }
            if(genreId && publisherId){
                books= await Book.findAndCountAll({where:{genreId,publisherId},limit,offset})
            }
            return res.json(books)
    }

    async getOne(req,res){

        const {id}=req.params
        const book=await Book.findOne(
           { where:{id}}
        )
        return res.json(book)
    }

     async DeleteOne(req,res){
        const {id}=req.body
        const book= await Book.destroy({
            where:{id}})
        return res.json(book)
    }
}

module.exports= new BookController()