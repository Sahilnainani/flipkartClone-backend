import express from "express";
import {usersignup,userlogin} from "../controller/user-controller.js";
import { getproducts,getproductbyid } from "../controller/product-controller.js";
import { addPaymentGateway } from "../controller/payment-controller.js";
const router = express.Router()

router.post('/signup',usersignup)
router.post('/login',userlogin)
router.get('/products',getproducts)
router.get('/product/:id',getproductbyid)
router.post('/payment',addPaymentGateway)


export default router
