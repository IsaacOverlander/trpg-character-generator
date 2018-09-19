const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET rout for displaying characters on main page
router.get('/', (req, res) => {
    const query = `SELECT * from "character" 
                    JOIN "race" on "race_id" = "race"."id" 
                    Join "class" on "class_id" = "class"."id" 
                    WHERE "person_id" = $1;`;
    pool.query(query, [req.user.id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR', error);
        res.sendStatus(500);
    })
});

router.get('/class', (req, res) => {
    const query = `SELECT * FROM "class";`;
    pool.query(query).then((reult) => {
        res.send(result);
    }).catch((error) => {
        console.log('ERROR', error);
        res.sendStatus(500);
    })
});

router.get('/race', (req, res) => {
    const query = `SELECT * FROM "race";`;
    pool.query(query).then((reult) => {
        res.send(result);
    }).catch((error) => {
        console.log('ERROR', error);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;