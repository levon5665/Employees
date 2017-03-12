const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('assets'));
if (process.env.NODE_ENV !== 'production') {
    var webpack = require('webpack');
    var config = require('./webpack.config');
    var compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));

} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(process.env.PORT || 3050, () => console.log('Listening to 3050'));









