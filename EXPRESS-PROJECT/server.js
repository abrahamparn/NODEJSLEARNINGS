const express = require('express')

const app = express();

const PORT = 3000;

const listOfFriends = [
    {
        id:0,
        name:"Albert"
    },
    {
        id:1,
        name: "Sir Newtwoon"
    },
    {
        id:2,
        name:"Abraham"
    }
]

app.use((req, res, next)=>{
    const start = Date.now()
    next()
    const end = Date.now() - start
    console.log(`${req.method} and ${req.url} and ${end}ms`)

})
app.use(express.json())

app.post('/friends', (req, res)=>{
    if(!req.body.name ){
       return res.status(400).json({
            error: "Data is not correct"
        })
    }
    const newFriend = {

        name: req.body.name,
        id: listOfFriends.length
    }
    listOfFriends.push(newFriend)
    res.json(newFriend)
})
app.get('/listOfFriends', (req, res) => {
    res.json(listOfFriends)
})

app.get('/listOfFriends/:friendId', (req, res) =>{
    const friendId = Number(req.params.friendId);
    if(Number.isInteger(friendId) && listOfFriends[friendId] != null){
       
        res.status(200).json(listOfFriends[friendId])

    }else{
        res.status(404).json({
            error: "Friend does not exists"
        })
    }
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Abraham Naiborhu</li></ul>')
})

app.post('/messages', (req, res) => {
    console.log('updating messages.....')
})
app.listen(PORT, () => {
    console.log(`OUR PORT IS LISTENING ON PORT ${PORT}`)
})

app.get('/friends', (req, res) => {
    res.send({
        id: 1,
        Name: "Abraham Naiborhu",
        Description: "Hebat banget ini sih, belajar insyaAllah tajir"

    })
})

