const app=require('snowframework');

app.init();
//添加controller
app.addController('home',require('./controllers/homeController'));

//启动服务器
app.start(8080);

