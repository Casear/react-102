var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.get('/api/todos',function(req, res){
    var todos = {}
    for(var i=0;i<10;i++){
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        todos[id] = {
            id:id,
            text:i+' todo content',
            complete:false
        }
    }
    res.json(todos)
})
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});