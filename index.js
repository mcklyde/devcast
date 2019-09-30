const io = require('socket.io')(8000);
const express = require('express');
const app = express();

const port = 3000



// TODO: Implement when player joins
io.on('connection', function(socket){
    console.log("Person has joined.")
})


// TODO: Handle API calls

app.get('/', function (req, res) {
    res.send('hello world')
})


app.listen(port, function(){
    console.log(`App listening in port ${port}`)
})