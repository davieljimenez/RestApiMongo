const User = require("../models/user")
const Car = require("../models/cars")


module.exports = {

    index: async(req, res, next) => {

        const users = await User.find({})
        res.status(200).json(users)

    },

    newUser: async(req, res, next) => {
        const newUser = new User(req.body)
        const user = await newUser.save()
        res.status(200).json(user)
    },

    getUser: async(req, res, next) => {
        const { userid } = req.params;
        const user = await User.findById(userid);
        res.status(200).json(user)

    },

    replaceUser: async(req, res, next) => {
        const { userid } = req.params
        const newUser = req.body
        const oldUser = await user.findByIdAndUpdate(userid, newUser)
        res.status(200).json({ succes: true })
    },

    updateUser: async(req, res, next) => {
        const { userid } = req.params
        const newUser = req.body
        const oldUser = await user.findOneAndUpdate(userid, newUser)
        res.status(200).json({ succes: true })
    },

    deleteUser: async(req, res, next) => {
        const { userid } = req.params
        await user.findByIdAndDelete(userid)
        res.status(200).json({ succes: true })
    },
    getUsersCars: async(req, res, next) => {
        const { userid } = req.params
        const user = await User.findById(userid).populate("cars")
        res.status(200).json(user)
    },
    newUserCar: async(req, res, next) => {
        const { userid } = req.params
        const newCar = new Car(req.body)
        const user = await User.findById(userid)

        newCar.seller = user
        await newCar.save()

        user.cars.push(newCar)
        await user.save()

        res.status(201).json(newCar)
    }
}