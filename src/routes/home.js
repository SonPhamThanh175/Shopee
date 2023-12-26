var express = require('express');
var router = express.Router();

// const home... đối tượng được khởi tạo từ class home... nên k cần viết hoa
const homeController = require('../app/controllers/HomeController');

// homeController.index

router.get('/:slug', homeController.show);
router.get('/home', homeController.index);

module.exports = router;