const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));

var sess; // global session, NOT recommended

router.get('/',(req,res) => {
    sess = req.session;
    if(sess.username) {
        return res.redirect('/admin');
    }
    res.sendFile('login.html');
});

router.post('/login',(req,res) => {
    sess = req.session;
    sess.username = req.body.username;
    res.end('done');
});

router.get('/admin',(req,res) => {
    sess = req.session;
    if(sess.username) {
        res.write(`<h1>Hello ${sess.username} </h1><br>`);
        res.end('<a href='+'/logout'+'>Logout</a>');
    }
    else {
        res.write('<h1>Please login first.</h1>');
        res.end('<a href='+'/'+'>Login</a>');
    }
});

router.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });

});

app.use('/', router);

app.listen(process.env.PORT || 3000,() => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});
