const {Author}=require('../models/models')
class AuthorController {
    async create(req, res){
        const {Author_Name,Author_Surname}=req.body
        const author= await Author.create({Author_Name,Author_Surname})
        return res.json(author)
    }

    async getAll(req, res) {
        const author=await Author.findAll()
        return res.json(author)
    }

    async DeleteOne(req,res){
        const {id}=req.params
        const author= await Author.destroy({
            where:{id:id}})
        return res.json(author)
    }
    
}

module.exports= new AuthorController()