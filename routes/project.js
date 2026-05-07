const express = require('express')
const Template = require('../models/Project')
const router = express.Router()


router.post('/', async(req,res)=>{
    try{

        const {templateId, content} = req.body;
        
        const newProject =  await new Template({templateId, content})
        
        await newProject.save();
        
        res.json(newProject);
    }catch(err){
        res.status(500).json({error: err.message})
    }
})

router.get('/:id' ,async(req,res)=>{
    try{

        const id = req.params.id
        const project = await Template.findById(id);
        res.json(project)
    }catch(err){
        res.status(500).json({error:err.message})
    }
})

module.exports = router