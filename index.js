const http = require('http')
const url = require('url')
const fs = require('fs')
const port = 3000

http.createServer((req, res) => {
    const { url } = req;
    console.log(url)
    let filename = '';

    if(url === '/') {
        filename = './index.html'
    }
    else if (url === '/about.html') {
        filename = './about.html'
    }
    else if (url === '/contact.html') {
        filename = './contact.html'
    } else filename = './404.html'

    fs.readFile(filename, function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          // how would i make it so if a file wasn't found to write data from an error/default page. 
          // this doesnt make sense because in readFile, im passing in a file to be read and then that data
          // is being written to the page. But how would you catch for a missing file?
          res.write('There was an error here');
          return res.end();
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      })
   
}) .listen(port, () => {
    console.log('This Server is running real good.')
});