const express = require('express');
const Player = require("../models/player.model");
const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players)
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).send('Player not found');
        }
        res.json(player);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
