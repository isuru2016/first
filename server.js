var express = require('express');
var app = express();
var mongo = require('mongojs');
var db = mongo('mean',['mean']);

app.use(express.static(__dirname +'/public'));

app.get('/contactlist',function(req,res){
	console.log("reseve get requst to me");
	db.mean.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
/*	person1={
		name:'isuru',
		email:'isuru@gmail.com',
		tel:'(111) 111 1111'
	}
	person2={
		name:'sampath',
		email:'sampath@gmail.com',
		tel:'(222) 222 2222'
	}
	person3={
		name:'isuru',
		email:'isuru@gmail.com',
		tel:'(333) 333 3333'
	}

var contactlist = [person1,person2,person3];
res.json(contactlist);*/

});
app.listen(3000,'127.0.0.1');
console.log('server is running...');