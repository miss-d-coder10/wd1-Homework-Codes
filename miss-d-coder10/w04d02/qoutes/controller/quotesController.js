let quotes = require("../data/quotes");

//index homepage
const qoutesIndex = (req, res) => {
  res.render("/", {quotes});
};

//new quotes
const quotesNew = (req, res) => {
  res.render("/new");
d};

//create -
const quotesCreate = (req, res) => {
  let quote = req.body.quotes;
  food.id = foods.length;
  food.push(quote);
  res.redirect(302, "/");
};

//show created quotes
const quotesShow = (req, res) => {
  const id = parseInt(req.params.id);
  const quote = quotes[i];
  res.render("/show", {quotes});
};

//edit existing quotes
const quotesEdit = (req, res) => {
  const id = parseInt(req.params.id);
  res.render("/edit", {quote: quotes[i]});
};

//update quotes
const quotesUpdate = (req, res) => {
  const id = parseInt(req.params.id);
  let quote = req.body.food;
  quote.id = id;
  quotes[id] = quote;
  res.redirect(302, `/quotes/${id}`);
};

//delete
const quotesDelete = (req, res) => {
  const id = req.params.id;
  quotes.splice(id, 1);
  quotes = quotes.map(quote => {
  quote.id--;
  return quote;
  });
  res.redirect(302, "/");
};

module.exports = {
 index: qoutesIndex,
 new: qoutesNew,
 create: foodsCreate,
 show: foodsShow,
 edit: foodsEdit,
 update: foodsUpdate,
 delete: foodsDelete
};
