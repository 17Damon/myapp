/**
 * Created by zhubg on 16/7/2.
 */
require('colors');
var _ = require('lodash');
var moment = require('moment');

var ib = new (require('ib'))({
    // clientId: 0,
    // host: '127.0.0.1',
    // port: 7496
}).on('error', function (err) {
    console.error(err.message.red);
}).on('result', function (event, args) {
    if (!_.includes(['currentTime'], event)) {
        console.log('%s %s', (event + ':').yellow, JSON.stringify(args));
    }
}).on('currentTime', function (time) {
    console.log(
        '%s %s%s',
        '[currentTime]'.cyan,
        'time='.bold, moment.unix(time).format('YYYY-MM-DD hh:mm:ss A')
    );
});

ib.connect();

var intervalId = setInterval(function () {
    ib.reqCurrentTime();
}, 300);

// Disconnect after 3 seconds.
setTimeout(function () {
    console.log('Stopping requests...'.yellow);
    clearInterval(intervalId);
    ib.disconnect();
}, 3000);