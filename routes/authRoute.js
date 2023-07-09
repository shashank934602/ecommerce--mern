import express from 'express'
import {registerController,loginController,testController, forgotPasswordController, updateProfileController, orderStatusController, getAllOrdersController, getOrdersController}from "../controllers/authController.js"
import { isAdmin, requireSignIn } from '../midldlewares/authMiddleware.js'



//router object
const router = express.Router()


//routing
//register || Method Post
router.post('/register',registerController)

// forget Password
router.post("/forgot-password",forgotPasswordController)

//login|| position: 
router.post('/login',loginController)

//test routes
router.get('/test',requireSignIn,isAdmin,testController)

//protected route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})
//protected admin auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

//update Profile

router.put('/profile',requireSignIn,updateProfileController)

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


export default router