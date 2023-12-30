const newsRouter = require('./news');
const itemsRouter = require('./items');
const siteRouter = require('./site');


function route(app) {
    app.use('/news', newsRouter);
    app.use('/items', itemsRouter);
    
    app.use('/', siteRouter);
   
}

module.exports = route;