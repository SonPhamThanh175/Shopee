var express = require('express');
var router = express.Router();

// const news... đối tượng được khởi tạo từ class News... nên k cần viết hoa
const itemController = require('../app/controllers/ItemController');

// newsController.index

router.get('/:slug', itemController.show);

module.exports = router;