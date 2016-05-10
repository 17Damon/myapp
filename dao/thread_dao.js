/**
 * Created by zhubg on 2016/4/24.
 */

'use strict'

//加载util路径
module.paths.push('./util');
//permission to kill
var tokill = {tokill: ['_rev','_id','_key']};

//连接DB
var db = require('database');

//threadDao
function threadDao(req, res) {
    //code

    //promise
    console.log('threadDao');
    return dao[req.body.methodName](req, res);
}

//功能Dao--start--
let dao = {};

//insert
dao.insert = function (req, res) {
    //some code

    console.log('threadDao-insert')
    var aqlStr = '299';
    console.log('aqlStr:' + aqlStr);
    var AQL = `
        INSERT {value: ` + aqlStr + `} 
        IN five 
        return NEW
        `;
    console.log('AQL:' + AQL);

    //promise
    return db.query(AQL)
        .then((cursor)=> {
            return cursor.all()
        });
}

//edit
dao.edit = function (req, res) {
    //some code

    //promise
    return 'edit';
}

//move
dao.move = function (req, res) {
    console.log('threadDao-move')

    //returns an array of result.
    return db.query(
        `
            For i in five
            limit 0,100
            return i
            `)
        .then((cursor)=> {
            return cursor.all()
        })

}

//delete
dao.delete = function (req, res) {
    //some code

    //promise
    return 'delete';
}

//queryAql
dao.queryAql = function (req, res) {
    //some code

    console.log('threadDao-queryAql')
    var aqlStr = '199';
    console.log('aqlStr:' + aqlStr);
    var AQL = `
        For i IN five 
        FILTER i.value == \'199\' 
        UPDATE i WITH { value: '250'} IN five 
        return UNSET(NEW,@tokill)
        `;
    console.log('AQL:' + AQL);
    //returns an array of result.
    return db.query(AQL,tokill)
        .then((cursor)=> {
            return cursor.all()
        });
}
//功能Dao---end---

//return
module.exports = threadDao;