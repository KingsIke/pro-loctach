// const mongoose = require('mongoose')
const Order = require('../models/orderDetails')

exports.home =(req,res) => {
    res.render('index', {title: 'Home',path:'/'});
}


exports.getVelite = (req,res) => {
    res.render('veliteProduct', {title:'Velite-Product',path:'/veliteProduct'});
}

exports.getFan = (req,res) => {
    res.render('fanProduct', {title:'Fan-Product',path:'/fanProduct'});
}


exports.getOrder = (req,res) => {
    res.render('order',{title:'Check Out',path:'/order'});
}

// exports.postOrder = (req,res) => {
//     const order = new Order({
//         firstname : req.body.firstname,
//         lastname : req.body.lastname,
//          email : req.body.email,
//          product : req.body.product,
//          quantity : req.body.quantity,
//          address :req.body.address,
//          zip : req.body.zip,
//          city : req.body.city,
//          state : req.body.state,
//          country : req.body.country,
//          remark : req.body.remark,
//     });
//     order.save()
//     // Order.find((err,data)=>{
//     //     res.render('order-success',{title:'Thanks',data:data,path:'/order-success'})
        
//     // })
//     .then(data => {
//         // const orderList = data.findAll();
//         // res.send(data)
//         res.render('order-success',{title:'Thanks',data:data,path:'/order-success'})
//     })
//     .catch(err => {
//         res.status(500).send({
//             message:
//             err.message || "error occur kings"
//         })
//     })
// }

exports.postOrder = async (req,res) => {
    try {
        const newOrder = await Order.create(req.body);
        res.redirect('./order-success')
    //     res.send({status:'success',data:{order:newOrder}
    // });
    }catch(err) {
        res.send({
            status:'fail',
            message:'Invalid data sent!'
        })
    }
};

exports.getSuccess = async (req,res) => {
    try{
        const order = await Order.find();
        res.render('order-success',{title:'Thanks',data:order,path:'/order-success'})
    } catch (err){
        res.status(404).render('404', {title:'Bad Page',path:'*'})
    }
}


   



// exports.postOrder = (req,res) => {
   
//     // console.log(req.body)
//     const firstname = req.body.firstname;
//     const lastname = req.body.lastname;
//     const email = req.body.email;
//     const product = req.body.product;
//     const quantity = req.body.quantity;
//     const address =req.body.address;
//     const zip = req.body.zip;
//     const city = req.body.city;
//     const state = req.body.state;
//     const country = req.body.country;
//     const remark = req.body.remark;


//     const productOrder = new Order(firstname,lastname,email,product,quantity,address,country,remark,state,city,zip);
//     productOrder.save();
//     // console.log(Order.findAll());
//     const orderList = Order.findAll();
//     console.log(orderList);


//     console.log(req.requestTime)
//     // // console.log(req.time)


//     res.render('order-success',{title:'Thanks',orderList:orderList,path:'/order-success'})
//     // res.redirect('/user/order-success')
// }

exports.getFanOrder = (req,res) => {
    res.render('fan-order',{title:'Fan-Milk',path:'/fan-order'});
}

// exports.getSuccess = (req,res) => {
//  const orderList = Order.findAll();
//  console.log(orderList)
//  }
// exports.getSuccess = (req,res) => {
//     // const orders= Order.findAll();
    
//     // res.render('order-success',{orders:orders})

//     // console.log(order)
// }




exports.getContact =  (req,res) => {
    res.render('contact',{title:'Contact',path:'/contact'});
}


exports.getDashboard = (req,res) => {
    res.render('dashboard', {title:'DashBoard',path:'/dashboard',name: req.userName});
}



exports.getError = (req,res) => {
    res.status(404).render('404', {title:'Bad Page',path:'*'});
}


