const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET rout for displaying characters on main page
router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
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
    }
    else {
        res.send('You are not logged in!');
    };

});

router.get('/class', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `SELECT * FROM "class";`;
        pool.query(query).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR', error);
            res.sendStatus(500);
        })
    }
    else {
        res.send('You are not logged in!');
    };
});

router.get('/race', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `SELECT * FROM "race";`;
        pool.query(query).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR', error);
            res.sendStatus(500);
        })
    }
    else {
        res.send('You are not logged in!');
    };
});

router.delete('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `DELETE FROM "character" WHERE "id" = $1;`;
        pool.query(query, [req.params.id]).then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('ERROR',error)
            res.sendStatus(500);
        })
    }
    else {
        res.send('You are not logged in!');
    };
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;