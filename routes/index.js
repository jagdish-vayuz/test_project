var express = require("express");
var router = express.Router();

const { readFile, writeFile, promises: fsPromises } = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  try {
    console.log("------- / route executed ------");
    updateFile();
    res.json({ code: 200, message: "ok" });
  } catch (e) {
    res.json({ code: 400, message: e.message });
  }
});
router.get("/local", function (req, res, next) {
  try {
    console.log("------- /local route executed ------");
    updateFile2();
    res.json({ code: 200, message: "ok" });
  } catch (e) {
    res.json({ code: 400, message: e.message });
  }
});

function updateFile2() {
  readFile(
    "/home/jagdish/Desktop/vayuz-task/mediasoup/mediasoup-bridge-v6/docker-compose.yml",
    "utf-8",
    function (err, contents) {
      if (err) {
        console.log(err);
        return;
      }

      const replaced = contents.replace(
        /bitovn_bridge/g,
        "bitovn_bridge_updated"
      );

      writeFile(
        "/home/jagdish/Desktop/vayuz-task/mediasoup/mediasoup-bridge-v6/docker-compose.yml",
        replaced,
        "utf-8",
        function (err) {
          console.log(err);
        }
      );
    }
  );
}
function updateFile() {
  readFile(
    "/var/www/html/docker-config/docker-compose.yml",
    "utf-8",
    function (err, contents) {
      if (err) {
        console.log(err);
        return;
      }

      const replaced = contents.replace(
        /bitovn_bridge/g,
        "bitovn_bridge_updated"
      );

      writeFile(
        "/var/www/html/docker-config/docker-compose.yml",
        replaced,
        "utf-8",
        function (err) {
          console.log(err);
        }
      );
    }
  );
}

module.exports = router;
