const express = require('express')
const signup = require('../models/Signup.model')
const router = express.Router()

router.post('/', async (req, res) => {
    const userData = await signup({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const output = await userData.save()
        res.status(200).json(output)
    }
    catch {
        (error) => {
            res.status(400).json('error list', error)
        }
    }
})

module.exports = router;