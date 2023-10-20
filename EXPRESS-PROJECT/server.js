const express = require('express')
// Importing routers
const friendsRouter = require('./router/friends.router')
const messagesRouter = require('./router/messages.router')
const listOfFriendsRouter = require('./router/listOfFriends.router')

const path = require('path')

const app = express();
// to set view engine bust be under express
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
const PORT = 3000;

app.use((req, res, next)=>{
    const start = Date.now()
    next()
    const end = Date.now() - start
    console.log(`${req.method} and ${req.baseUrl}${req.url} and ${end}ms`)
})
// creating root source
app.get('/', (req, res)=>{
    res.render('index', {
        title: 'This is using hbs',
        caption: 'MANTAPPPPPPPP',
        alt:"postman"
    })
})

app.use('/site', express.static(path.join(__dirname, 'public')))

app.use(express.json())

// Friends route using express routing and mounting it
app.use('/friends', friendsRouter)

app.use('/listOfFriends', listOfFriendsRouter)

app.use('/messages', messagesRouter)


app.listen(PORT, () => {
    console.log(`OUR PORT IS LISTENING ON PORT ${PORT}`)
})
