const Item = require('../models/Item');
const express = require('express');

const {
  muntipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class ItemController {
  // [GET] /items/:slug
  show(req, res ,next) {
    Item.findOne({ slug: req.params.slug})
      .lean()
      .then((item) => {
        res.render('items/show',{ item });
      })
      .catch(next);
  }
}

module.exports = new ItemController();