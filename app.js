const Server = require('./server.js')
const app = Server.app()

app.listen(process.env.PORT)