var path = require("path");

module.exports = function(app){
	app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "/../public/index.html"));
});

	app.get("/index2", function(req, res){
	res.sendFile(path.join(__dirname, "/../public/index2.html"));
});

app.get("/index3", function(req, res){
res.sendFile(path.join(__dirname, "/../public/index3.html"));
});

app.get("/index4", function(req, res){
res.sendFile(path.join(__dirname, "/../public/index4.html"));
});

}
