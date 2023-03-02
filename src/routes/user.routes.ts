import {getAlluser,Login,getOneUser,Register} from '../controller/user.controller'
import express from "express";
let router=express.Router()

//get all user
router.get('/',getAlluser);

//get one user 
router.get('/:id',getOneUser)

//create user
router.post('/',Register)

router.post('/login',Login)

export default router

