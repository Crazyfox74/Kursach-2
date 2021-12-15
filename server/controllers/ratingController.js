const {Rating}=require('../models/models')
class RatingController {
    async create(req, res){
        const {rating_value}=req.body
        const ratings= await Rating.create({rating_value})
        return res.json(ratings)
    }

    async getAll(req, res) {
        const ratings=await Rating.findAll()
        return res.json(ratings)
    }

    async DeleteOne(req,res){
        const {id}=req.params
        const ratings= await Rating.destroy({
            where:{id:id}})
        return res.json(ratings)
    }
    
}

module.exports= new RatingController()