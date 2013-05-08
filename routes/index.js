var bitcoin = require('bitcoin');
var mongoose = require('mongoose');
var Player = mongoose.model('Player');


var client = new bitcoin.Client('localhost', 8333, 'bitcoinrpc', 'C7rJWWWZWUjzZaf4zPzR8DcEu4vaPEPxoXDnzB8ZHccs');

exports.index = function(req, res){
    console.log(client);
    res.end();
};

exports.new = function(req, res){

    var data = req.body;
    console.log(client.getNewAddress(data.phone));
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
