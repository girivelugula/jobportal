// const express = require("express");
//  const app  = express();
//  const path = require('path');
//  const cors  = require("cors");
// app.use(cors());
// app.use(express.static('./dist/client-app'));
// app.get('/*', function (req, res) {
//      res.sendFile(path.join(__dirname, './../dist/client-app/index.html'));
//     console.log('path', path.join(__dirname, './../dist/client-app/index.html'))
// });
//  // Start the app by listening on the default
//  // Heroku port
//  app.listen(process.env.PORT || 8080);
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/client-app'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/client-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);