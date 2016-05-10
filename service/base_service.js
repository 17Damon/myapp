/**
 * Created by zhubg on 2016/4/24.
 */

'use strict'

//allService注册
module.paths.push('./service');
var service = {};
service.admin = require('admin_service.js');
service.user = require('user_service.js');
service.thread = require('thread_service.js');
service.permission = require('permission_service.js');

//baseService
function baseService(req, res, module, method) {

    //promise
    console.log('baseService');

    //can not find moduleService
    if (!service[module]) {
        console.log('baseService can not find service[' + module + ']');
        return Promise.reject(
            'baseController can not find service[' + module + ']'
        );
    }

    return service[module](req, res, module, method);
}

//return
module.exports = baseService;