const express = require('express');
const Team = require("../models/team.model");
const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams)
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id).populate('players');
        if (!team) {
            return res.status(404).send('Team not found');
        }
        res.json(team);
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message);
    }
});

module.exports = router;