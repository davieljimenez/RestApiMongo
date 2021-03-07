const router = require("express-promise-router")()
const {
    index,
    newUser,
    getUser,
    replaceUser,
    deleteUser,
    getUsersCars,
    newUserCar
} = require("../controllers/user")
router.get("/", index)
router.post("/", newUser)
router.get("/:userid", getUser)
router.put("/:userid", replaceUser)
router.delete("/:userid", deleteUser)
router.get("/:userid/cars", getUsersCars)
router.post("/:userid/cars", newUserCar)


module.exports = router;