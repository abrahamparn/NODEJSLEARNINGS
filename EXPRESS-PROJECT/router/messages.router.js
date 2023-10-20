const express = require('express')

const messagesController = require('../controllers/messages.controllers')

const messagesRouter = express.Router()
messagesRouter.use((req, res, next)=>{
    console.log("percobaan lainnya: ", req._destroy)
    next()
})
messagesRouter.get('/', messagesController.getMessages);
messagesRouter.post('/', messagesController.postMessages);

module.exports = messagesRouter;