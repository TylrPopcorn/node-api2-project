// require your server and launch it here

/* Dependencies

    npm install
    npm i express

*/

const server = require('./api/server')

const PORT = 8080;

server.listen(PORT, () => {
    console.log("test")
})



