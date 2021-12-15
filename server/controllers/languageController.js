const {Language}=require('../models/models')
class LanguageController {
    async create(req, res){
        const {name}=req.body
        const language= await Language.create({name})
        return res.json(language)
    }

    async getAll(req, res) {
        const languages=await Language.findAll()
        return res.json(languages)
    }

    async DeleteOne(req,res){
        const {id}=req.params
        const languages= await Language.destroy({
            where:{id:id}})
        return res.json(languages)
    }
    
}

module.exports= new LanguageController()