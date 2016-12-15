var http = require("http");
var url = require("url");
var words = ['Fish','DOUR CREAM!!!','Nostril','Basement','Vent','Tile','Lace','Smudge','Dank','Chair', 'Fatal', 'Burn', 'Bottomless', 'Severe', 'Abducted', 'Disease', 'Dead', 'Horrific', 'Tense', 'Power', 'Fighting', 'Liberation', 'Limousine', 'Smut', 'Excess', 'Drifting', 'Heretic', 'Narcotic', 'Binocular', 'Major', 'Capsule', 'Forearm', 'Setup', 'Annihilate', 'Functional', 'Banana', 'Accident', 'Gasmask', 'Bronze', 'Doom', 'Fictional', 'Alarming', 'Emotion', 'Export', 'Huge', 'Diametric', 'Innocent', 'Dead', 'Amphibian', 'Cruelty', 'Face', 'Haircut', 'Cruelty','Flamingo', 'Fatal', 'Fence', 'Hanger', 'Wave', 'Tail', 'Chalk', 'Fan', 'Moon', 'Large', 'Sheet', 'CAKE', 'We', 'The', 'It', 'When', 'Them', 'They', 'Him', 'Her', 'He', 'She', 'Or', 'And', 'Blue', 'Green', 'Red', 'Brown', 'Black', 'Male', 'Female'];
var keys = ["8bGrATcAzsR32e6T", "mcQq2wDL6SoTCHLu", "8s2e5Tuh7kNBQJSI", "1bdO23Kw7MZobliD", "Wcbr2iQLORwSd65T", "9VcHzv1ZCnVTZOJn", "yNanXiCIpFoDc9yw", "xF1rTTI0dfAN5FCQ", "Z5f8WZxL5vRaM8Uu", "xcNAiEnQ4zEQZNrV", "MvoCoIQVB8Wzm39X", "U7G5yEAv4x6l3QRD", "Awb2GeRG9mASAxia", "TAiZmy6XUVdXw5sx", "lV9taCJnIXU175tR" , "fOZJM8Rg0p1lPmQr", "EJpwA0TWDie1OCQI", "tsVHyUc61FuT1XCQ", "ogl787kTzSETBZA3", "Q4akTXWZWryl3m3D", "IBD9rwtTZ3ch81W6"];
var port = process.env.PORT

var server = http.createServer(function(request, response) {
    params = url.parse(request.url,true).query;
    var a = params.key;
    var key = new String (a);
    if (keys.indexOf(key) == -1) {
        var item = words[Math.floor(Math.random()*words.length)];
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(item);
        response.end();
    } else {
        response.writeHead(403, {"Content-Type": "text/plain"});
        response.write("Error: Not authorized.");
        response.end();
    }
    console.log(keys.indexOf(key));
});

server.listen(port);
console.log("WordPI is running on port " + port);
