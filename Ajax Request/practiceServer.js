var express=require('express');
var app=express();
// Initialising Express...
var bodyParser=require('body-parser');

var port= process.env.PORT || 4000;

app.use('/', express.static('public_static'));
//On loading localhost: 5000, index.html inside public_static is run...

app.get('/student', function (req, res) {
    res.send('Student is Here')
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);

app.listen(port, function () {
    console.log('Successfully running on '+ port);
});
