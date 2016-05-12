/**
 * Created by zhubg on 2016/4/24.
 */
'use strict'
var express = require('express');
var favicon = require('serve-favicon');
var reWrite = require('express-urlrewrite');
var bodyParser = require('body-parser');
//baseController注册
var baseController = require('./controller/base_controller');
var app = express();

//使用bodyParser
app.use(bodyParser.json());

//图标
app.use(require('serve-favicon')(__dirname+'/favicon.ico'));


//所有请求进入
app.use(function (req, res, next) {
    console.log('Hello,the 1st url is:' + req.url);
    //res.redirect('/management');
    next();
});

//加载根路径
// app.use('/',express.static('./'));

//改写URL
app.use(reWrite(
    '/*',
    '/api/management'
));

//转向/api/management处理
app.all('/api/management', (req, res, next) => {
    //测试BODY
    req.body = {
        //controller定向
        object: 'thread',
        //controllerFunction定向
        methodName: 'move',
        operation:'removePost',
        pid:'12'
    }
    //权限判断

    if (!req.body)return next('bodyless!!!!');
    if (!req.body)return next('bodyless!!!!');
    console.log('the management:' + req.url);
    //转向controller
    baseController(req, res)
        .then(obj => {
            //成功响应
            res.json(obj);
            console.log(obj)
        })
        //失败退出
        .catch(next);
});

//处理错误
app.use((err, req, res, next) => {
    let data = {};
    data.url = req.originalUrl;
    data.error = err.stack ? err.stack : JSON.stringify(err);
    res.status(500).json(
        data
    );
});

//webAPP启动3000
var server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('hello,http://' + host + ':' + port);
});
