const Item = require('../models/Item');

class SiteController {
  index(req, res, next) {
    Item.find({})
      .lean()
      .then((items) => {
        res.render("home", { items });
      })
      .catch((error) => {
        next(error);
      });
  }
  // [GET] /search
  search(req, res) {
    res.render("news");
  }
}

module.exports = new SiteController();