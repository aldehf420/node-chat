//const electron = require('electron')
//var path = require('path')

//mainWindow = new BrowserWindow({titleBarStyle: 'hidden',
    //width: 800,
    //height: 800,
    //minWidth: 800,
    //minHeight: 800,
    //backgroundColor: '#312450',
    //show: false,
    //icon: path.join(__dirname,
    //'assets/icons/png/64x64.png')})

var express = require('express');
var app = express();

//ejs (html을 server로 옮길때 필요)
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//post 요청시 필요함
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'))

//db 연동
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	post: 3306,
	password: '',
	database: 'my_db'
});

//db 오류 났는지 확인
connection.connect(function(err){
	if(err){
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Success DB connection');
});

//뒤에 /붙음
app.get('/', function(req, res) {
	res.render('login.html');
});

app.post('/', function(req, res){
	var id = req.body.id;
	var pwd = req.body.pwd;

	var sql = `SELECT * FROM user_info WHERE id = ?`;
	connection.query(sql, [id], function(error, results, fields){
		if(results.length == 0){
			res.render('login.html');
		}
		else{
			var db_name = results[0].username;
			var db_pwd = results[0].password;

			if(pwd == db_pwd){
				//res.redirect('/chat');
				res.render('chat.html', {username : db_name});
			}
			else{
				res.render('login.html');
			}
		}
	});
});

app.get('/register', function(req, res) {
	res.render('register.html');
});

app.post('/register', function(req, res){
	var name = req.body.name;
	var id = req.body.id;
	var pwd = req.body.pwd;
	var pwdconf = req.body.pwdconf;

	if(pwd == pwdconf){
		//DB에 쿼리 알리기
		var sql = `INSERT INTO user_info VALUES(?, ?, ?)`;
		connection.query(sql, [name, id, pwd], function(error, results, fields){

		});

		res.redirect('/');
	}
	else{
		res.render(alert("비밀번호 오류"));
		res.render('register.html');
	}
});

app.get('/chat', function(req, res) {
	res.render('chat.html');
});

//채팅을 위한 socket 연결
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.on('login', function (data) {
    console.log('client logged-in:' + data.username);
    socket.username = data.username;
    io.emit('login', data.username);
  });
  socket.on('chat', function (data) {
    console.log('Message form %s: %s', socket.username, data.msg);
    var msg = {
      username: socket.username,
      msg: data.msg
    };
    io.emit('chat', msg);
  });
  socket.on('disconnect', function () {
    socket.broadcast.emit('logout', socket.username);
    console.log('user disconnected: ' + socket.username);
  });
});

server.listen(3306, function() {
	console.log('Example app listening on port 3306!');
});
