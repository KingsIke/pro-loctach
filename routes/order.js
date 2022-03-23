const express = require('express');
const orderController = require('../controllers/order')

const router = express.Router()


router.get('/' , orderController.home);

router.get('/fanProduct' , orderController.getFan)

router.get('/veliteProduct' ,orderController.getVelite );

router.get('/fan-order' , orderController.getFanOrder);

router.get('/order' , orderController.getOrder);


// router.post('/order' , userController.postOrder);

router.post('/order-success', orderController.postOrder);
router.get('/order-success', orderController.getSuccess);





router.get('/contact' , orderController.getContact);

router.get('*' ,orderController.getError );


module.exports = router;