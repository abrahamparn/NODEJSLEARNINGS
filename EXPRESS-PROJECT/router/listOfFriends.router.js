const express = require('express')

const listOfFriendsController = require("../controllers/listOfFriends.controller")

const listOfFriendsRouter = express.Router()
listOfFriendsRouter.use((req, res, next)=>{
    console.log("this is makanan :", req.baseUrl)
    next()
})
listOfFriendsRouter.get('/', listOfFriendsController.getListOfFriends)
listOfFriendsRouter.get('/:friendId', listOfFriendsController.getListOfFriendsId)

module.exports = listOfFriendsRouter