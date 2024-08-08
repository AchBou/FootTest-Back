const express = require('express');
const League = require("../models/league.model");
const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    try {
        const leagues = await League.find();
        res.json(leagues)
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const league = await League.findById(req.params.id).populate('teams');
        if (!league) {
            return res.status(404).send('League not found');
        }
        res.json(league);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;