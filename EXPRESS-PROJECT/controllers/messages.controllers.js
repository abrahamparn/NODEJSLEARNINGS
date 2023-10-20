const path = require('path')
function getMessages(req, res){
    
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'testing.jpg'));
    res.render('messages', {
        friend: "TRJ"
    });
    // res.send('<ul><li>Abraham Naiborhu</li></ul>');
}

function postMessages(req, res) {
    console.log('updating messages.....');
}

module.exports = {
    getMessages,
    postMessages
}