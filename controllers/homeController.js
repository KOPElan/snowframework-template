var action=require('snowframework-action');

const homeController = {
    indexAction: function (req) {                        
        return action.view();
    },
    aboutAction: function (req) {                
        return action.view();
    },
    helloAction:function(req){
        return action.content('hello world',action.contentType.html);
    }
};

module.exports = homeController;