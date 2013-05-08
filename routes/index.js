var bitcoin = require('bitcoin');
var mongoose = require('mongoose');
var Player = mongoose.model('Player');

var client = new bitcoin.Client({host:'localhost', port:8332, user:'bitcoinrpc', pass:'C7rJWWWZWUjzZaf4zPzR8DcEu4vaPEPxoXDnzB8ZHccs'});

exports.index = function(req, res){
    Player.find(function(err, players){
        console.log(players);
        res.end();
    })
};

exports.new = function(req, res){
    var data = req.body;
    client.cmd("getnewaddress", data.phone, function(err, addr){
       if (err){
           return console.log(err);
       } else {
           console.log("addr "+ addr);

           new Player({
               phoneNumber   : data.phone,
               address       : addr
           }).save(function(err, player){
                   if (err){
                       console.log(err);
                   } else {
                       res.send(player);
                   }
               })

       }
    });
}

exports.getBalance = function(req, res){
    var data = req.body;
    Player.findOne({phoneNumber: data.phone},function(err, player){
        client.cmd("getbalance", player.phoneNumber, 0, function(err, balance){
            console.log(balance);
            res.end();
        });
    });
}
