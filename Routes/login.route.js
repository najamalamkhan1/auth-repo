const express = require('express');
const router = express.Router()
const login = require('../models/Login.model');

router.post('/', async (req, res) => {
    const output = await login.find({})
    try {
        const new_output = await output.save()
        res.status(200).json(new_output)
    }
    catch {
        (error) => {
            res.status(400).json('error occured', error)
        }
    }
})
module.exports = router;