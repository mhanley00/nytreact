const router = require("express").Router();
const articleRoutes = require("./articles");
const nytRoutes = require("./nyt");

// NYT routes, respond to these, really calling api articles, api nyt
router.use("/articles", articleRoutes);

router.use("/nyt", nytRoutes);

module.exports = router;
