/**
 * Created by zhubg on 2016/4/24.
 */

'use strict'

//baseDao注册
module.paths.push('./dao');
var baseDao = require('base_dao');

//threadService
function threadService(req, res) {
    //some code
    
    //promise
    console.log('threadService');
    return service[req.body.methodName](req, res);
}

//功能Service--start--
var service = {};

//insert
service.insert = function (req, res) {
    //some code
    
    console.log('threadService-insert');
    //promise
    return baseDao(req, res);
}

//edit
service.edit = function (req, res) {
    //some code
    let editPromise = new Promise(function(resolve){
        resolve({edit:'edit'});
    });
    console.log('threadService-edit');
    //promise
    return editPromise;
}

//move
service.move = function (req, res) {
    //some code
    console.log('threadService-move');
    //promise
    return baseDao(req, res);
}

//delete
service.delete = function (req, res) {
    //some code

    //promise
    return 'delete';
}

//queryAql
service.queryAql = function (req, res) {
    //some code
        
    //promise
    return baseDao(req, res);
}

//功能Service---end---

//return
module.exports = threadService;
