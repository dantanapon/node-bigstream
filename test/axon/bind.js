// var axon = require('axon');
// var sock = axon.socket('push');
//
// sock.bind('tcp://0.0.0.0:3333')
// console.log('push server started');
//
// sock.on('disconnect',function(dat){
//   console.log(dat._peername);
// })
//
// sock.on('connect',function(dat){
//   console.log('connect');
//   console.log(dat._peername);
// })
//
//
// var i=0;
// setInterval(function(){
//   var t = {'t':'hello','seq':i++}
//   sock.send(t);
// }, 1500);

// var axon = require('axon');
// var sock = axon.socket('rep');
//
// sock.bind('tcp://0.0.0.0:3333')
//
// sock.on('message', function(img, reply){
//   // resize the image
//   console.log('receive');
//   setTimeout(function(){
//     console.log('reply');
//     var rep = img;
//     reply(rep);
//   },5000);
// });

var ctx = require('../../context');
var RPCServer = ctx.getLib('lib/axon/rpcserver');

var server = new RPCServer({
  //'url':'tcp://0.0.0.0:3333'
  'url':ctx.getUnixSocketUrl('test.sock')
});

server.start();

server.set_remote_function(function(req,cb){
  console.log('receive');
  setTimeout(function(){
    console.log('reply');
    cb(null,req)
  },10000);
});
