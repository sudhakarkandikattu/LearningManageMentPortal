var mysql = require('mysql');
var express = require('express');

var app = express();
var port = process.env.PORT || 8005;
var responseStr = "MySQL Data:";
const cors = require('cors')
app.use(cors())
var mysqlHost = process.env.MYSQL_HOST || 'localhost';
   var mysqlPort = process.env.MYSQL_PORT || '3306';
   var mysqlUser = process.env.MYSQL_USER || 'root';
   var mysqlPass = process.env.MYSQL_PASS || 'root';
   var mysqlDB   = process.env.MYSQL_DB   || 'node_db';

   var connectionOptions = {
     host: mysqlHost,
     port: mysqlPort,
     user: mysqlUser,
     password: mysqlPass,
     database: mysqlDB
   };
app.get('/courses',function(req,res){
   var queryStr = 'SELECT * FROM courses';
   
   var connection = mysql.createConnection(connectionOptions);
   connection.connect();
   connection.query(queryStr, function (error, results, fields) {
     if (error) throw error;
     res.status(200).send(results);
   });
   connection.end();
});

app.get('/courses',function(req,res){
    var queryStr = 'SELECT * FROM courses';
    
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();
    connection.query(queryStr, function (error, results, fields) {
      if (error) throw error;
      res.status(200).send(results);
    });
    connection.end();
 });


 app.get('/course',function(req,res){
    var queryStr = 'SELECT * FROM course where cid = 1';
    
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();
    connection.query(queryStr, function (error, results, fields) {
      if (error) throw error;
      res.status(200).send(results);
    });
    connection.end();
 });

 app.get('/questions',function(req,res){
    var queryStr = 'SELECT questions.id,question from course_questions INNER JOIN questions where course_questions.question_id = questions.id and cid=1';
    
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();
    connection.query(queryStr, function (error, results, fields) {
      if (error) throw error;
      res.status(200).send(results);
    });
    connection.end();
 });


app.listen(port, function(){
    console.log('Sample mySQL app listening on port ' + port);
});