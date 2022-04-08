 
// const orders = [];
// // const
// class Order {
//     constructor(firstname,lastname,email,product,quantity,address,zip,city,state,country,remark) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.email =email;
//         this.product = product;
//         this.quantity = quantity;
//         this.address = address;
//         this.zip = zip;
//         this.city = city;
//         this.state = state;
//         this.country = country;
//         this.remark = remark ;
        
//     }
//    save() {
//        orders.push(this);
//    }
//    // to get the product 
//    static findAll() {
//        return orders
//    }

// }
// module.exports = Order


    
const mongoose = require('mongoose');
// const mongoose = require('../config/db');

// const Schema = mongoose.Schema;
const orderSchema = new mongoose.Schema({
    firstname:{
        type:String,
        lowercase:true,
        minlength:[5, 'Name to short'],
        trim:true
    },
    lastname:{
        type:String,
        lowercase:true,
        minlength:[5, 'Name to short'],
        trim:true

    },
    email:{
        type:String,
        lowercase:true,
        trim:true
    },
    product:{
        type:String,
        
        
    },
    quantity:{
        type:String

    },
    address:{
        type:String
    },
    zip:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    country:{
        type:String
    },
    remark:{
        type:String
    }
},{timestamps:true});

const Order = mongoose.model('Order',orderSchema)

module.exports = Order
