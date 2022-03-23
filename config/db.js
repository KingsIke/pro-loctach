const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://Zj0mG5Zn5W00jYSv:Zj0mG5Zn5W00jYSv@cluster0.bwvxg.mongodb.net/loctach?retryWrites=true&w=majority', {
           useNewUrlParser: true,
           useUnifiedTopology: true 
        })
       
     
        console.log(`Mongo DB connected:  ${conn.connection.host}`);
        } catch (err) {
            console.log(err ,'try again');
            
        }
}




module.exports = connectDB