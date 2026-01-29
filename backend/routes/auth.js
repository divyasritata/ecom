const express = require('express')
const router = express.Router()
const User = require("../models/User.js")
const bcrypt = require("bcrypt")

router.post("/create-user", async (req, res) => {
    try {
        const { name, email, password, mobile, address } = req.body
        console.log(email)
        let user = User.findOne({ email})
        if (user) {
            return res.status(400).json({ "message": "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        user = new User({
            name,email,password,mobile,address
        })
        await user.save()
        res.status(201).json({ "message": "User created successfully" })
    } 
    catch (error) {
        return res.status(500).json({ "message": "internal server error while creating user" })
    }
})

module.exports = router