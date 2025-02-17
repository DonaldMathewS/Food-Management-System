const mongoose= require('mongoose')
const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    address: {
      
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
            required: true,
        },
},
        rating: {
            type: Number,
            
        },
        
        createdAt: {
            type: Date,
            default: Date.now,
        },
        
   } )
   const hotel = mongoose.model('hotel', hotelSchema);

module.exports = hotel;
