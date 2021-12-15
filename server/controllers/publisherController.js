const {Publisher}=require('../models/models')
class PublisherController {
    async create(req, res){
        const {name}=req.body
        const publisher= await Publisher.create({name})
        return res.json(publisher)
    }

    async getAll(req, res) {
        const publishers=await Publisher.findAll()
        return res.json(publishers)
    }

    async DeleteOne(req,res){
        const {id}=req.params
        const publishers= await Publisher.destroy({
            where:{id:id}})
        return res.json(publishers)
    }
    
}

module.exports= new PublisherController()