const express = require('express')
// Importing routers
const friendsRouter = require('./router/friends.router')
const messagesRouter = require('./router/messages.router')
const listOfFriendsRouter = require('./router/listOfFriends.router')
const app = express();
const PORT = 3000;

app.use((req, res, next)=>{
    const start = Date.now()
    next()
    const end = Date.now() - start
    console.log(`${req.method} and ${req.baseUrl}${req.url} and ${end}ms`)

})
app.use(express.json())

// Friends route using express routing and mounting it
app.use('/friends', friendsRouter)

app.use('/listOfFriends', listOfFriendsRouter)

app.use('/messages', messagesRouter)


app.listen(PORT, () => {
    console.log(`OUR PORT IS LISTENING ON PORT ${PORT}`)
})
