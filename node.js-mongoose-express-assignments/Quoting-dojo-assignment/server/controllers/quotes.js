// We will move our logic into here for our routes
// First create methos to handle tasks that get triggered on specific routes (showing all quotes, and creating a quote)
var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = {
    show: function(req, res){
        Quote.find({}, function(err, quotes){
            res.render('main', {quotes: quotes});
        })
    },
    create: function(req, res){
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save(function(err){
            if(err){
                console.log("something went wrong");
            } else {
                res.redirect('/main');
            }
        })
    }
}
