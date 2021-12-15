const {Ages}=require('../models/models')
class AgesController {
    async create(req, res){
        const {name}=req.body
        const age= await Ages.create({name})
        return res.json(age)
    }

    async getAll(req, res) {
        const ages=await Ages.findAll()
        return res.json(ages)
    }

    async DeleteOne(req,res){
        const {id}=req.params
        const ages= await Ages.destroy({
            where:{id:id}})
        return res.json(ages)
    }
    
}

module.exports= new AgesController()