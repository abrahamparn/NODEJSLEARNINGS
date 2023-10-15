const http = require('http')

//setup port
const PORT = 3000;

// Node server needs two parameter, request and response
//req is readable streams
//res is writeable stream
// const server = http.createServer((req, res) =>{

//     res.writeHead(200, {
//         "Content-Type": 'application/json',
//     })
//     // called end because it signals the response including the head and any other is complete and ready to be send back
//     res.end(JSON.stringify({
//         id: 1,
//         name: 'Sir Isaac newton',
//         detail: 'The one who invented gravity'
//     }))
// })
//another way to create server
const friends = [
    {    id: 0,
        name: 'Sir Isaac newton',
        detail: 'The one who invented gravity'
    },
    {    id: 1,
        name: 'Sir Alber Einstain',
        detail: 'The one who invented relativity'
    },
    {    id: 1,
        name: 'Sir Abraham Naiborhu',
        detail: 'The one who is going to be very rich'
    }

]
const server = http.createServer()
server.on('request', (req, res) =>{
    const items = req.url.split('/')
    // localhost... / friends / 2\
    //POSTING DATA
    if(req.method === 'POST' && items[1] === 'friends'){
        req.on('data', (data)=>{
            const friend = data.toString()
            console.log('Request: ' + friend)
            friends.push(JSON.parse(friend))

            //TO CALL THE POST
            /*
            fetch('http://localhost:3000/friends', {
                method: "POST",
                body: JSON.stringify({
                    id:3,
                    name: 'Ryan Dahl',
                    detail: "Creator of NODE"
                })
            })

            */
        })
        req.pipe(res)
        // USE THIS
        /*
        fetch('http://localhost:3000/friends/', {
            method: "POST",
            body: JSON.stringify({
                id:3,
                name: 'Ryan Dahl',
                detail: "Creator of NODE"
            })
            }).then((response) => response.json()).then((friend) => {console.log(friend)})
        */

    }
    //GETTING DATA
    else if(req.method === 'GET' && items[1] === 'friends'){
        //this is if req.url != '/friends' -> but it failed
        // res.writeHead(400, {
        //     "Content-Type": "text/plain"
        // })
        // res.end("Error, No such request")
        
        res.writeHead(200, {
            "Content-Type": 'application/json',
        })
        // called end because it signals the response including the head and any other is complete and ready to be send back
        if(items.length === 3){

            res.end(JSON.stringify(friends[Number(items[2])]))
        }else{
            res.end(JSON.stringify(
               friends
            ))
        }
       
    }
    else if( req.method === 'GET' && items[1] === 'message'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>Hello Isaac</li>')
        res.write('<li>Hello Abraham</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        res.end()
    }
    else {
        res.statusCode = 404;
        // res.setHeader('Content-Type', 'text/plain');
        // res.end("Error, no such request");
        res.end()
    }
    
})
server.listen(PORT, () =>{
    console.log('listening on port'+ " " + PORT)
}); //127.0.0.1 -> localhost

