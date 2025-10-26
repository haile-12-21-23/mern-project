const express=require('express');
const router=express.Router();
const {createUser,getUser}=require('../controllers/userController');

router.get('/allUser',getUser);
router.post('/createUser',createUser);
module.exports=router;