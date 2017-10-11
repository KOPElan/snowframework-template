var mvc = require('snowframework-mvc');

const homeController = {
    indexAction: function (req) {
        var viewModel = {
            //render by server
            viewbag: {
                title: 'SnowFramework',
                topic: 'Hello Snowframework!',
                content: 'A Simple nodeJS Web Framework, these render by server !'
            },
            //render by client
            prop:{
                content:'hello vue example!',
                alert:'these render by client'
            }
        };
        
        return mvc.action.view(viewModel);
    }
}

module.exports = homeController;