const Portfolio = require("../models/portfolio");


module.exports = {
    index,
    create,
    new: newPortoflio,
    deletePortfolio,
    editPortfolio
  };


function index(req, res){
    console.log(req.user, '<<<<<req user ')
    Portfolio.find({}, function (err, portfolios) {
      res.render('portfolios/index', { portfolios, title: "Portfolio Center" });
  });
}

function create(req, res){
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
      console.log(portfolios);
      portfolios.save(function(err){
        res.redirect('/portfolios');
      })
    });
  };


function editPortfolio(req, res) {
  res.render('portfolios/edit', {title: "Edit Portfolio" })
}





// function show(req, res, next) {
//   Portfolio.findById(req.params.id, function (err, flight) {
//     if (err) return res.redirect('/flights');{
//       res.render('flights/show', { flight, tickets, title: 'Flight Detail' });
//     }})}



// function newFlight(req, res) {
//   const newFlight = new Flight();
//   departDefault = newFlight.departs;
//   const departsDate = departDefault.toISOString().slice(0, 16);
//   res.render("flights/new", { departsDate, title: "Add Flight" });
// }

