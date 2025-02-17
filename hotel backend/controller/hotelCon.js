const hotel=require('../model/hotelModel')



exports.createHotel = async (req, res) => {
    try {
        const createHotel= await hotel.create(req.body)

        res.status(201).json({
            message: "Hotel created successfully",
            data: createHotel,
        });
    } catch (error) {
        res.status(400).json({
            message: "Error creating hotel",
            error: error.message,
        });
    }
};
exports.viewHotel = async (req,res) => {
   try{ const getHotel = await hotel .find()
    console.log(getHotel)
    res.status(200).json({
        message:"hotelInfo viewed successfully",
        data:getHotel
    })
}
    catch (err){
        res.status(400).json({error:err.message})
    }
   }
