class HomeController {
    //[GET] /home
    index(req, res) {
        res.render('home');
    }
    //[GET] /home/:slug
    show(req, res) {
        res.send('home detail');
    }
}

module.exports = new HomeController();
