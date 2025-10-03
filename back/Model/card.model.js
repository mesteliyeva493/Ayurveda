const mongoose = require('mongoose')
const CardSchema=require('../Schemas/card.schemas')


const CardModel=mongoose.model('card',CardSchema)


module.exports=CardModel