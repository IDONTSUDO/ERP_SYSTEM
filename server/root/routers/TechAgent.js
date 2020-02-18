const express = require("express")
const {
    getAll, 
    saveTechCollection,
    SaveTechOntheBasisOfSpec,
    TechColId
} = require("../controllers/Tech")
const { jwtTokenUserId, requireSignin } = require("../middleware/middleware.js")
const router = express.Router({ mergeParams: true });


router.get('/get/spec/tech/all', getAll)
router.post('/new/tech/collection', saveTechCollection)
router.post('/save/tech/by/collection/:techColId', SaveTechOntheBasisOfSpec)
router.param('techColId',TechColId)


module.exports = router