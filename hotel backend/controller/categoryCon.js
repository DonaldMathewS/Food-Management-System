const category = require('../model/categoryModel')

exports.getCategory = async (req,res) => {

    try {
       const getcat = await category.create(req.body)
       
       res.status(201).json({
           message:'category send',
           totalPrice:getcat
       });
     
    } catch (error) {
       res.status(401).json({message:error.message})
       console.log(error)
       
    }};
    exports.getAllCat = async (req,res) => {
      try{ const getcate = await category.find()
       res.status(200).json({
           message:"got all user info",
           data:getcate
       })
      } catch(err){
       res.status(401).json({
           message:"can't get user info",
           data:err
       })
   }
   }

   