const express = require('express')

const friendsController = require('../controllers/friends.controller')

const friendsRouter = express.Router()
friendsRouter.use((req,res,next)=>{
    console.log('ip address: '+req.ip)
    next()
})
friendsRouter.get('/', friendsController.getFreinds)
friendsRouter.post('/', friendsController.postFriends)

module.exports = friendsRouter;