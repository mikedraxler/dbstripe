const express = require('express')
const app = express()
const path = require('path')
var bodyParser = require('body-parser')
const busboy = require('busboy');
var port = 3200

app.listen(port, function () {
console.log('We are listening on port ' + port)
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('*', function (req, res) {
res.sendFile(path.join(__dirname, './mano.html'))
})

app.post('/num', function (req, res) {
var num = req.body.value
console.log(num)
return res.end('done')
})



// const http = require('http');



// http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     console.log('POST request');
//     const bb = busboy({ headers: req.headers });
//     bb.on('file', (name, file, info) => {
//       const { filename, encoding, mimeType } = info;
//       console.log(
//         `File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
//         filename,
//         encoding,
//         mimeType
//       );
//       file.on('data', (data) => {
//         console.log(`File [${name}] got ${data.length} bytes`);
//       }).on('close', () => {
//         console.log(`File [${name}] done`);
//       });
//     });
//     bb.on('field', (name, val, info) => {
//       console.log(`Field [${name}]: value: %j`, val);
//     });
//     bb.on('close', () => {
//       console.log('Done parsing form!');
//       res.writeHead(303, { Connection: 'close', Location: './' });
//       res.end();
//     });
//     req.pipe(bb);
//   } else if (req.method === 'GET') {
//     res.writeHead(200, { Connection: 'close' });
//     res.end(`
//       <html>
//         <head></head>
//         <body>
//           <form method="POST" enctype="multipart/form-data">
//             <input type="file" name="filefield"><br />
//             <input type="text" name="textfield"><br />
//             <input type="submit">
//           </form>
//         </body>
//       </html>
//     `);
//   }
// }).listen(8000, () => {
//   console.log('Listening for requests');
// });