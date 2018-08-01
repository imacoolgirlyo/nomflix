const express = require("express"),
    socketIO = require("socket.io"),
    http = require("http"),
    path = require("path");
    app = express(),
    logger = require("morgan"),
    server = http.createServer(app);

    // express application 생긴거임

    const PORT = 4000;
    const handleListening = () => 
        console.log(`✅ Server Runnin on port : http://localhost:${PORT}`);

    app.use(logger("dev"));
    app.use(express.static(path.join(__dirname,"public")));
    server.listen(PORT, handleListening);