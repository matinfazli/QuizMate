const path = require('path');

module.exports = {
  app: function () {
    const indexPath = path.join(__dirname, '/../index.html');
    const publicPath = path.join(__dirname, '../public');

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}