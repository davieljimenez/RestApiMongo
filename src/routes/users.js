const router = require("express-promise-router")()
const {
    index,
    newUser,
    getUser
} = require("../controllers/user")
router.get("/", index)
router.post("/", newUser)
router.get("/:userid", getUser)

module.exports = router;