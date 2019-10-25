const express = require("express")
const { searchTest } = require("../controllers/search")

const router = express.Router({ mergeParams: true });

router.get('/test/search/', searchTest)


module.exports = router
