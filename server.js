const http = require('http');
const fs = require('file-system');

const server = http.createServer((req, res) => {

    const assets = [
        'jpg',
        'png',
        'gif',
        'js',
        'css',
        'woff',
        'eot',
        'ttf'
    ];

    function isAssets(reqUrl) {
        let i = 0;
        assets.forEach(function (word) {
            i = i + reqUrl.includes(word);
        });
        return (i === 1);
    }

    if (isAssets(req.url)) { // проверяем соответствие url запроса
        const asset = req
            .url
            .substring(req.url.lastIndexOf('/') + 1);
        fs.readFile(asset, (err, data) => {
            if (err) {
                res.end();
                throw new Error('Error while reading file: ' + err);
            } else {
                res.end(data);
            }
        });
        if (req.url.includes('css')) {

            res.setHeader('Content-Type', 'text/css');
        }
        if (req.url.includes('js')) {

            res.setHeader('Content-Type', 'text/javascript');
        }
        return;
    }

    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            res.setHeader('Content-Type', 'text/html');
            res.end('<strong>Error!</strong>');
            throw new Error('Error while reading index.html');
        }
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log('Server is listening on port: 3000');
});