const express = require('express')
const path = require('path');
const app = express();
app.use(express.static('public'));
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});
app.get("/elementPage.html", (req, res) => {
    res.sendFile(path.join(__dirname, 'elementPage.html'));
});
app.get("/element.js", (req, res) => {
    res.sendFile(path.join(__dirname, 'element.js'));
});
app.get("/element.css", (req, res) => {
    res.sendFile(path.join(__dirname, 'element.css'));
});
app.get("/styles.css", (req, res) => {
    res.sendFile(path.join(__dirname, 'styles.css'));
});
app.get("/nullify.css", (req, res) => {
    res.sendFile(path.join(__dirname, 'nullify.css'));
});
app.get("/main.js", (req, res) => {
    res.sendFile(path.join(__dirname, 'main.js'));
});
app.get('/icons/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'icons/' + req.params['name']));
});
app.get('/images/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'images/' + req.params['name']));
});
app.get('/newCafe/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'newCafe/' + req.params['name']));
});
app.get('/delivery/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'delivery/' + req.params['name']));
});
app.get('/restorans/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'restorans/' + req.params['name']));
});
app.get('/cafe/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'cafe/' + req.params['name']));
});
app.get('/pabs/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'pabs/' + req.params['name']));
});
app.get('/fastfood/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'fastfood/' + req.params['name']));
});
app.get('/clubs/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'clubs/' + req.params['name']));
});
app.get('/sushi/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'sushi/' + req.params['name']));
});
app.get('/karaoke/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'karaoke/' + req.params['name']));
});
app.get('/pizza/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'pizza/' + req.params['name']));
});
app.get('/stolov/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'stolov/' + req.params['name']));
});
app.get('/meat/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'meat/' + req.params['name']));
});
app.get('/center/:name', function (req, res) {
    res.sendFile(path.join(__dirname, 'center/' + req.params['name']));
});
app.get('/info/:name', function (req, res) {
    MongoClient.connect(url,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            dbo.collection(req.params['name']).find().toArray(function (err, result) {
                res.send(JSON.stringify(result));
            });
        });
})
app.get('/info/:id/:name', function (req, res) {
    MongoClient.connect(url,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },
        function (err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            dbo.collection(req.params['id']).find({name:req.params["name"]}).toArray(function (err, result) {
                res.send(JSON.stringify(result));
            });
        });
})
app.listen(3000);