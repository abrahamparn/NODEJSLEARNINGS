const listOfFriends = require('../model/listOfFriendsModel.model')



function postFriends(req, res){
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
}
function getFreinds(req,res) {
    res.send({
        id: 1,
        Name: "Abraham Naiborhu",
        Description: "Hebat banget ini sih, belajar insyaAllah tajir"

    })}
module.exports={
    postFriends,
    getFreinds
}