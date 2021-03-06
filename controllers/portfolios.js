const portfolio = require("../models/portfolio");
const Portfolio = require("../models/portfolio");

module.exports = {
    index,
    create,
    new: newPortoflio,
    deletePortfolio,
    editPortfolio,
    detailPortfolio,
    error
  };

function index(req, res){
    Portfolio.find({}, function (err, portfolios) {
      res.render('portfolios/index', { portfolios, title: "Portfolio Center" });
  });
}
function error(req, res){
      res.render('error', {title: "Error Page" });
}
function create(req, res){
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  Portfolio.create(req.body, function(err, portfolios){
      if (err) return res.render('portfolios/new',{ portfolios, title: "Portfolio Create" });
      res.redirect('portfolios/new');
  })
}
function newPortoflio(req, res) {
  const newPortfolio = new Portfolio();
  Portfolio.find({}, function (err, portfolios) {
  res.render('portfolios/new',{newPortfolio, portfolios, title: "Portfolio Create" })
})}

function deletePortfolio(req, res) {
  Portfolio.findByIdAndDelete(req.params.id, function(err, portfolios){
    if (err) return res.redirect('/');
      portfolios.save(function(err){
        res.redirect('/portfolios');
      })
    });
  };
function detailPortfolio(req, res) {
  Portfolio.findById(req.params.id, function (err, detailsPortfolio) {
    // console.log(detailsPortfolio.date.toISOString().split(".")[0], 'edit')
    // if (err) return res.redirect('/portfolios/index');
    // console.log(err)
    res.render('portfolios/edit', {detailsPortfolio, title: "Edit Portfolio" })
  })}
function editPortfolio(req, res) {
  Portfolio.findByIdAndUpdate(req.params.id, req.body, {new:true}, function (err, overridePortfolio) {
    console.log(err)
    if (err) return res.redirect('/portfolios/index');
      res.redirect(`/portfolios/${req.params.id}`)
  })}
