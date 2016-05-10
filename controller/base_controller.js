/**
 * Created by zhubg on 2016/4/24.
 */

'use strict'

//加载controller路径
module.paths.push('./controller');

//allController注册
var controller = {};
controller.admin = require('admin_controller');
controller.user = require('user_controller');
controller.thread = require('thread_controller');
controller.permission = require('permission_controller');

//baseController
function baseController(req, res) {
    //code
    //权限校验
    controller.permission(req, res, 'permission', 'query')
        .then(() => {

            //调度指向参数
            //module模块
            let module = req.body.object;
            //方法
            let method = req.body.methodName;
            //promise
            console.log('baseController');

            //can not find controller
            if (!controller[module]) {
                console.log('baseController can not find controller[' + module + ']');
                //在then 中  等价 throw
                //     return Promise.reject(
                //         'baseController can not find controller[' + module + ']'
                //
                // }
                throw    'baseController can not find controller[' + module + ']'
            }
            return controller[module](obj);
        })
}

//return
module.exports = baseController;