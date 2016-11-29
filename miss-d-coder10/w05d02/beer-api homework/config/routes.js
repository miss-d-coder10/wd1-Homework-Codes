const router = require('express').Router();
const beersController = require('../controllers/beers');
const authController = require('../controllers/auth');
const users = require('../controllers/users');
const jwt = require('jsonwebtoken');
const secret = require("./tokens").secret;

function secureRoute(req, res, next) {
 if(!req.headers.authorization) return res.status(401).json({ message: "Unauthorized" });
//do you have authorisation header? if none then, not authorised.

 let token = req.headers.authorization.replace('Bearer ', '');
 //HTTP protocol. Token authorization.

 jwt.verify(token, secret, (err, payload) => {
   if(err) return res.status(401).json({ message: "Unauthorized" });
   req.user = payload;
//secret is needed to decode the token. stored in the server. secret for the token.
//if cannot decode, it will throw an error. token not valid.
//payload ({_id:12, user: "mk"}) "secretcode" which will be used 
   next();
 });
}

router.route('/register')
  .post(authController.register);
router.route('/login')
  .post(authController.login);

router.route('/beers')
  .all(secureRoute)
  .get(beersController.index)
  .post(beersController.create);

router.route('/beers/:id')
  .all(secureRoute)
  .get(beersController.show)
  .put(beersController.update)
  .delete(beersController.delete);

module.exports = router;
