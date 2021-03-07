const router = require("express-promise-router")()
const {
    index,
    newUser,
    getUser,
    replaceUser,
    deleteUser
} = require("../controllers/user")
router.get("/", index)
router.post("/", newUser)
router.get("/:userid", getUser)
router.put("/:userid", replaceUser)
router.delete("/:userid", deleteUser)


module.exports = router;