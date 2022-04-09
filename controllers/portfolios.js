const Portfolio = require("../models/portfolio");


module.exports = {
    index,
    
  };


function index(req, res){
    console.log(req.user, '<<<<<req user ')
    Portfolio.find({}, function (err, portfolios) {
      res.render('portfolios/index', { portfolios, title: "Portfolio Center" });
  });
}