var request = require("request");
request('https://gist.githubusercontent.com/VerizonMediaOwner/a4f27c0c04358b343f4a2308ea903cb8/raw/917ca865813d504796ccae1d1643584d526473de/weather_ydn_js.json', (err, res, body) => {
    if (!err) {
        var pasedBody = JSON.parse(body);
        return console.log("City Name :=>", pasedBody["location"]["city"]);

    }
    console.log(err);
});