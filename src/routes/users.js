const router = require("express-promise-router")()
const {
    index,
    newUser,
    getUser,
    replaceUser
} = require("../controllers/user")
router.get("/", index)
router.post("/", newUser)
router.get("/:userid", getUser)
router.put("/:userid", replaceUser)

module.exports = router;