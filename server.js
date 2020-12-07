const express = require('express')
const path = require('path');
const app = express();
app.use(express.static('public'));
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
app.get("/", (req, res)=>{
	res.sendFile(path.join(__dirname,'main.html'));
	});
app.get("/styles.css", (req, res)=>{
	res.sendFile(path.join(__dirname,'styles.css'));
	});
app.get("/nullify.css", (req, res)=>{
	res.sendFile(path.join(__dirname,'nullify.css'));
	});
app.get("/main.js", (req, res)=>{
	res.sendFile(path.join(__dirname,'main.js'));
	});
app.get('/icons/:name', function (req, res) {
    res.sendFile(path.join(__dirname,'icons/' + req.params['name']));
    });
app.get('/images/:name', function (req, res) {
    res.sendFile(path.join(__dirname,'images/' + req.params['name']));
    });
app.get('/newCafe/:name', function (req, res) {
    res.sendFile(path.join(__dirname,'newCafe/' + req.params['name']));
    });
app.get('/delivery/:name', function (req, res) {
    res.sendFile(path.join(__dirname,'delivery/' + req.params['name']));
    });
    app.get('/restorans/:name', function (req, res) {
        res.sendFile(path.join(__dirname,'restorans/' + req.params['name']));
        });
app.get('/info/:name',function(req,res){
	MongoClient.connect(url,
 {
     useUnifiedTopology: true, 
     useNewUrlParser: true
  },
 function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection(req.params['name']).find().toArray(function(err,result){
  	res.send(JSON.stringify(result));
  });
});
})
app.listen(3000);