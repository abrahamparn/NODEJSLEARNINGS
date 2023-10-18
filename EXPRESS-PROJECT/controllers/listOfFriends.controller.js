const listOfFriends = require('../model/listOfFriendsModel.model')

function getListOfFriendsId (req, res){
    const friendId = Number(req.params.friendId);
    if(Number.isInteger(friendId) && listOfFriends[friendId] != null){
       
        res.status(200).json(listOfFriends[friendId])

    }else{
        res.status(404).json({
            error: "Friend does not exists"
        })
    }
}
function getListOfFriends(req, res){
    res.json(listOfFriends)
}

module.exports = {
    getListOfFriendsId,
    getListOfFriends,


}