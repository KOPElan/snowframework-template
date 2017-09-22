var snowf = require('snowframework');
var appsetting = require('./appsetting');

//init with appsetting.json
var app = snowf(appsetting.snowf);
//add controller
app.addController('home', require('./controllers/homeController'));
//start app
app.start();