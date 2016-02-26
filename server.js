var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('countries', ['countries']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/countries', function(req, res){
	db.countries.find(function(err, docs){
		console.log(docs);
		res.json(docs)
	})
})

app.post('/countries', function(req, res){
	console.log(req.body)
	db.countries.insert(req.body, function(err, doc){
		res.json(doc)
	})
})

app.delete('/countries/:id', function(req, res){
	var id = req.params.id;
	db.countries.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc)
	})
})

app.get('/countries/:id', function (req, res) {
  var id = req.params.id;
  db.countries.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
    res.json(doc);
  });
});


app.listen(3000);
