// Guillaume Potvin-Brossard, Hugues Santerre
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let repImages =/\/images/;

    const headers = {
        'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
        'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        'Access-Control-Max-Age': 2592000, // 30 days
        'Content-Type': 'text/html',
    };

    res.writeHead(200, headers);

    if (req.url === "/") {
        console.log(__dirname);
        fs.readFile(path.join(__dirname + '/public/Accueil.html'), 
            "utf8", 
            (err, data) => {
                if (err) {
                    throw "C'est l'heure d'une pause! " +err;
                }
                res.write(data);
                res.end();
            });
    } 
    
    else if (req.url === "/Fabrication") {
        console.log(__dirname);
        fs.readFile(path.join(__dirname + '/public/Fabrication.html'), 
            "utf8", (err, data) => {
            res.write(data);
            res.end();
        })
    }

    else if (req.url === "/Utilisation") {
        console.log(__dirname);
        fs.readFile(path.join(__dirname + '/public/Utilisation.html'), 
            "utf8", (err, data) => {
            res.write(data);
            res.end();
        })
    }

    else if (req.url === "/Elimination") {
        console.log(__dirname);
        fs.readFile(path.join(__dirname + '/public/Elimination.html'), 
            "utf8", (err, data) => {
            res.write(data);
            res.end();
        })
    }

    else if (req.url === "/Solution") {
        console.log(__dirname);
        fs.readFile(path.join(__dirname + '/public/Solution.html'), 
            "utf8", (err, data) => {
            res.write(data);
            res.end();
        })
    }
    else if (repImages.test(req.url)) {
        let nomFichier = "." + req.url;
        let contentType = 'image/jpg' ;

        let fichier = fs.readFileSync(nomFichier);
        res.writeHead(200, {'Content-Type': contentType});
        res.end(fichier,'binary');
    }
     else {
        res.write("<p>Erreur: Cette page n'existe pas</p>");
        res.end();
    }
});



server.listen(4444);

server.on("connection", socket => {
    console.log("nouvelle connexion...");
    });

