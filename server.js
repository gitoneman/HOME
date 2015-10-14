var path = require('path');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var async = require('async');
var colors = require('colors');
var mongoose = require('mongoose');
var request = require('request');
var React = require('react');
var Router = require('react-router');
var xml2js = require('xml2js');
var _ = require('underscore');
var router = require('./routers/router');
var app = express();

//mongodb start
mongoose.connect('mongodb://localhost/home');
mongoose.connection.on('error', function() {
  		console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});
//mongodb end

//定时任务
var schedule = require('node-schedule');
var jobs = require('./jobs');

//登录认证 start
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('express-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');
var User = require('./models/user');

passport.serializeUser(function(user, done) {
  	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  	User.findById(id, function(err, user) {
   	 	done(err, user);
  	});
});

passport.use(new LocalStrategy({ usernameField: 'username' }, function(username, password, done) {
  	var criteria = {username:username}
  	User.findOne(criteria, function(err, user) {
    	if (!user) return done(null, false, { message: '用户 ' + username + ' 不存在'});
    	var sha1 = crypto.createHash("sha1");
		sha1.update(password);
		var hex = sha1.digest("hex");
		if(user.password == hex){
			return done(null, user);
    	}else{
			return done(null, false, {message:'密码不正确'});
    	}
  	});
}));

var isAuthenticated = function(req, res, next) {
  	if (req.isAuthenticated()) return next();
  	res.redirect('/login');
};

app.use(cookieParser());
app.use(session({secret: "need change"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash())
//登录认证 end

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * GET /api/characters
 * Returns 2 random characters of the same gender that have not been voted yet.
 */

app.get('/',isAuthenticated,router.index);

//user api
app.get('/login',router.user.login);
app.post('/login', router.user.signin);
app.get('/register',router.user.register);
app.post('/register',router.user.signup);
app.get('/logout',router.user.logout);
app.get('/userinfo',router.user.userinfo)

app.use(function(err, req, res, next) {
  	res.status(err.status || 500);
  	res.send({ message: err.message });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
// var io = require('socket.io')(server);
// var onlineUsers = 0;

// io.sockets.on('connection', function(socket) {
//   	onlineUsers++;

//   	io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

//   	socket.on('disconnect', function() {
// 		onlineUsers--;
// 		io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
//   	});
// });

server.listen(app.get('port'), function() {
  	console.log('Express server listening on port ' + app.get('port'));
});