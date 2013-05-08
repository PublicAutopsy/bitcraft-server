var bitcoin = require('bitcoin');
var mongoose = require('mongoose');
var Player = mongoose.model('Player');

var client = new bitcoin.Client({host:'localhost', port:8332, user:'bitcoinrpc', pass:'C7rJWWWZWUjzZaf4zPzR8DcEu4vaPEPxoXDnzB8ZHccs'});

exports.index = function(req, res){
    console.log(client);
    res.end();
};

exports.new = function(req, res){

    var data = req.body;
    var newAddress = "";

    client.cmd("getnewaddress", data.phone, function(err, addr){
       if (err){
           return console.log(err);
       } else {
           console.log("addr "+ addr);
           newAddress = addr;
       }
    });

    console.log("Addr: "+ newAddress);

    new Player({
        phoneNumber   : data.phone,
        address       : newAddress
    }).save(function(err, player){
            if (err){
                console.log(err);
            } else {
                res.send(player);
            }
        })
}

exports.makeWallet = function(req, res){
    client.getNewAddress("", function(err, address){
        console.log(address);
        res.end();
    })
}

exports.getBalance = function(req, res){
    client.getBalance("*", 0, function(err, balance){
        console.log("Balance: "+balance);
        res.end();
    })
}
