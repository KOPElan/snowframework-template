const app=require('snowframework');

const homeController = {
    indexAction: function (req, res) {
        app.response.view('/home/index.html', res);
    },
    aboutAction: function (req, res) {
        app.response.view('/home/about.html', res);
    }
};

module.exports = homeController;