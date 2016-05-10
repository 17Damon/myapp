/**
 * Created by zhubg on 2016/4/24.
 */

'use strict'

//baseServirce注册
module.paths.push('./service');
var baseServirce = require('base_service');

//threadController
function threadController(req, res) {
    //some code

    //promise
    console.log('threadController');
    return controller[req.body.methodName](req, res);
}

//功能--start--
var controller = {};

//insert
controller.insert = function (req, res) {
    //some code

    console.log('threadController-insert');
    //promise
    return baseServirce(req, res);
}

//edit
controller.edit = function (req, res) {
    //some code

    //promise
    return 'edit';
}

//move
controller.move = function (req, res) {
    //some code
    
    console.log('threadController-move');
    //promise
    return baseServirce(req, res);
}

//delete
controller.delete = function (req, res) {
    //some code

    //promise
    return 'delete';
}

//queryAql
controller.queryAql = function (req, res) {
    //some code
        
    //promise
    return baseServirce(req, res);
}

//功能Controller---end---

//return
module.exports = threadController;