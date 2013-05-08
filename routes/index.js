var bitcoin = require('bitcoin');

var client = new bitcoin.Client('localhost', 3000, 'bitcoinrpc', 'C7rJWWWZWUjzZaf4zPzR8DcEu4vaPEPxoXDnzB8ZHccs');

exports.index = function(req, res){
    console.log(client);
    res.end();
};

exports.makeWallet = function(req, res){
    client.getnewaddress("", function(err, address){
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
