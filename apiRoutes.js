//Require data files
var tData = require("data/tablesData");
var wlData = require("data/waitinglistData");

module.exports(function(app) {
  app.get("/api/tables", function(req, res) {
    res.json(tData);
  });

  app.get("/api/waitlist", function(req, res) {
    res.json(wlData);
  });
});
