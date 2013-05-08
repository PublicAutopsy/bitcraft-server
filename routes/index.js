var bitcoin = require('bitcoin');
var mongoose = require('mongoose');
var Confession = mongoose.model('Confession');


var client = new bitcoin.Client('localhost', 3000, 'bitcoinrpc', 'C7rJWWWZWUjzZaf4zPzR8DcEu4vaPEPxoXDnzB8ZHccs');

exports.index = function(req, res){
    console.log(client);
    res.end();
};

exports.create = function(req, res){
    var data = req.body;
    console.log(data);
    new Player({
        phoneNumber   : data.phone,
        address       : client.getNewAddress(data.phone)
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
