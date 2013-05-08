var bitcoin = require('bitcoin');

var client = new bitcoin.Client('localhost', 3000, 'bitcoinrpc', 'C7rJWWWZWUjzZaf4zPzR8DcEu4vaPEPxoXDnzB8ZHccs');

exports.index = function(req, res){
    console.log(client);
};