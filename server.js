const express = require('express');
const app = express();

const options = {
  dotfiles: 'ignore',
  etag: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
    //res.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval';  style-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' wss:; img-src 'self' blob: data:; frame-src 'self' https://*.nutanix.com;");
  }
}

app.use(express.static('dist', options));
app.listen(8080, () => console.log('Example app listening on port 8080!'));