const express = require('express')
const friendsController = require('./controllers/friends.controller')
const messagesController = require('./controllers/messages.controllers')
const listOfFriendsController = require("./controllers/listOfFriends.controller")
const app = express();

const PORT = 3000;

app.use((req, res, next)=>{
    const start = Date.now()
    next()
    const end = Date.now() - start
    console.log(`${req.method} and ${req.url} and ${end}ms`)

})
app.use(express.json())

app.get('/friends', friendsController.getFreinds)
app.post('/friends', friendsController.postFriends)

app.get('/listOfFriends', listOfFriendsController.getListOfFriends)
app.get('/listOfFriends/:friendId', listOfFriendsController.getListOfFriendsId)

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessages);



app.listen(PORT, () => {
    console.log(`OUR PORT IS LISTENING ON PORT ${PORT}`)
})
