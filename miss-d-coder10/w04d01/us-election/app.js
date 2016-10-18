const express = require("express");
const morgan = require ("morgan");
const expressLayouts = require("express-ejs-layouts");
const router = require ("./config/routes");

const app = express();

const port = process.env.PORT || 8000;

app.set("view engine", "ejs");

app.set ("views", `${__dirname}/views`);
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(morgan("dev"));

app.use("/", router);

//heading to render into trump and hilary page but wont work
app.get("/hilary", function(req, res){
  res.render("webtemplate", {heading: "About Hilary Clinton"});
});

app.get("/trump", function(req, res){
  res.render("webtemplate", {heading: "About Donald Trump"});
});



app.listen(port, () => console.log(`Running of ${port}`));
