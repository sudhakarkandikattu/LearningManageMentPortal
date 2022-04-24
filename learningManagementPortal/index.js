var mysql = require('mysql');
var express = require('express');
var app = express();
var port = process.env.PORT || 8005;
var responseStr = "MySQL Data:";
const cors = require('cors')
const bp = require('body-parser')
app.use(cors())
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

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
//app.use('/static', express.static(path.join(__dirname, 'public')))
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
app.get('/course/:id',function(req,res){
    var queryStr = 'SELECT * FROM course where cid ='+ req.params.id;
    console.log(queryStr);
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();
    connection.query(queryStr, function (error, results, fields) {
      if (error) throw error;
      res.status(200).send(results);
    });
    connection.end();
 });
 app.post('/submitAnswers',function(req,res){
   console.log('req.body', req.body);
    const answers = req.body;
    // const answers = [{"id":1,"qid":1,"question":"How many sides are equal in a scalene triangle?","options":[{"selected":true,"que_options":"3"},{"selected":false,"que_options":"2"},{"selected":false,"que_options":"0"}]},{"id":1,"qid":2,"question":"How many sides are equal in a scalene triangle?","options":[{"selected":false,"que_options":"3"},{"selected":false,"que_options":"2"},{"selected":false,"que_options":"0"}]}]
    var queryStr = 'SELECT answer from course_questions INNER JOIN questions where course_questions.question_id = questions.id and cid=1 ';
    var connection  = mysql.createConnection(connectionOptions);
    connection.connect();
    connection.query(queryStr, function (error, results, fields) {
      if (error) throw error;
      right_answers =0
      var i=0;
      answers.forEach(answer=>{
       console.log('answers Item', answer);
       const OptionsAry = answer.options;
       OptionsAry.forEach((option, index) => {
         console.log('option.selected', option.selected);
          console.log('option.que_options', option.que_options);
          console.log(`results[i]['answer']`, results[i]['answer']);

          if(option.selected && (option.que_options == results[i]['answer']))
          {
            console.log('inside if Block');
            right_answers=right_answers+1;
          }
          
        })
        ++i;
      })
      res.status(200).send({"right_answers":right_answers,"total_questions":answers.length});
    });
    connection.end();
 });
 app.get('/questions',function(req,res){
    var queryStr = 'SELECT questions.id,questions.qid,question,options from course_questions INNER JOIN questions where course_questions.question_id = questions.id and cid=1';
    var connection = mysql.createConnection(connectionOptions);
    connection.connect();
    connection.query(queryStr, function (error, results, fields) {
      if (error) throw error;
      console.log(results)
      for (let i in results)
      {
          let jsonStr = results[i]['options'];
          let jsonArr = JSON.parse(jsonStr);
          let arr = [];
          for(let i in jsonArr)
          {
            arr.push(jsonArr[i].A)
          }
          results[i]['options']= jsonArr;
      }
      console.log(results)
      res.status(200).send(results);
    });
    connection.end();
 });

 app.post('/login',function(req,res){
   console.log('Login Data', req.body);
  const {email, password} = req.body;
  var connection  = mysql.createConnection(connectionOptions);
  connection.connect();
  var queryStr = `SELECT * from users where email=${email} and password=${password}`;
  connection.query('SELECT * FROM users WHERE email = ? and password = ?', [email, password], (error, results, fields) => {
    if (error) throw error;
    var status = false;
    if(results.length==1)
    {
      res.status(200).send({"status":true,"details": results});
    }
    else{
      res.status(401).send({"status":false});
    }
  })
  // .then(rows => {
  //     return console.log(rows);
  // })
  // .catch(err => {
  //     return console.error('Error executing query', err.stack);
  // });

  // console.log('queryStr', queryStr);
  // connection.query(queryStr, function (error, results, fields) {
  //   if (error) throw error;
  //   var status = false;
  //   if(results.length==1)
  //   {
  //     res.status(200).send({"status":true,"details": results});
  //   }
  //   else{
  //     res.status(401).send({"status":false});
  //   }
    
  // });
  connection.end();
});

app.listen(port, function(){
    console.log('Sample mySQL app listening on port 121 ' + port);
});