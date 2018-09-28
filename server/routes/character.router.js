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
// GET route for populating classes drop down
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
// GET route for populating races drop down
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
// GET route for all skills
router.get('/skills', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `SELECT * FROM "skill" ORDER BY "skill"."skill";`;
        pool.query(query).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR', error);
            res.sendStatus(500);            
        })
    }
    else {
        res.send('You are not logged in!');
    }
})
// GET route for character skills
router.get('/skills/class', (req, res) => {
    if(req.isAuthenticated()) {
        const query = `SELECT "skill"."skill" FROM "class_skill" 
                          JOIN "class" on "class_id" = "class"."id"
                          JOIN "skill" on "skill_id" = "skill"."id"
                          WHERE "class_id" = $1;`;
        pool.query(query, [req.query.class]).then((result) => {
                res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR', error);
            res.sendStatus(500);
        })
    }
    else {
        res.send('You are not logged in!');
    }
});
// PUT route for setting skills as true
router.put('/update/true', (req, res) => {
    if (req.isAuthenticated()) {
        let query = `UPDATE "skill" SET "skill_value" = 'true' WHERE "skill" = $1;`;
        console.log(req.body);
        // TODO: Switch to async await
        let i = 0;
        for(let skill of req.body) {
            pool.query(query, [skill]).then(() => {
                i++;
                if(i === req.body.length) {
                    res.sendStatus(200);
                }
                console.log(skill);
            }).catch((error) => {
                console.log('ERROR: skills', error);
                res.sendStatus(500);
            });
        }
    }
    else {
        res.send('You are not logged in!');
    }
})
// PUT route for setting skills back to false
router.put('/update/false', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `UPDATE "skill" SET "skill_value" = 'false';`;
        pool.query(query).then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('ERROR', error);
            res.sendStatus(500);
        })
    }
    else {
        res.send('You are not logged in!');
    }
});
// PUT route for updating characters
router.put('/update/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `UPDATE "character" SET "name" = $1, "experience" = $2 WHERE "character_id" = $3;`;
        pool.query(query, [req.body.name, req.body.exp, req.params.id]).then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('ERROR', error);
            res.sendStatus(500);
        });
    }
    else {
        res.send('You are not logged in!');
    };
});
// DELETE route for removing characters
router.delete('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `DELETE FROM "character" WHERE "character_id" = $1;`;
        pool.query(query, [req.params.id]).then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('ERROR', error)
            res.sendStatus(500);
        })
    }
    else {
        res.send('You are not logged in!');
    };
});
// POST route for adding characters
router.post('/create', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.body);
        const query = `INSERT INTO "character" ("person_id", "class_id", "background_id", "race_id",
                                                "alignment_id", "personality_id", "ideal_id", "bond_id", 
                                                "flaw_id", "name", "strength", "dexterity", "constitution", 
                                                "intelligence", "wisdom", "charisma", "inspiration", "proficiency", "character_skills")
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19);`;
        pool.query(query, [req.user.id, req.body.class_id, req.body.background_id, req.body.race_id, req.body.alignment_id,
        req.body.personality_id, req.body.ideal_id, req.body.bond_id, req.body.flaw_id, req.body.name,
        req.body.strength, req.body.dexterity, req.body.constitution, req.body.intelligence, req.body.wisdom,
        req.body.charisma, req.body.inspiration, req.body.proficiency, req.body.skills])
            .then((result) => {
                res.sendStatus(201);
            }).catch((error) => {
                console.log(error);
                res.sendStatus(500);
            });
    }
    else {

    }
});
// GET route for equipment
router.get('/equipment/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `SELECT "equipment".* FROM "class_equipment" 
                       JOIN "class" ON "class_id" = "class"."id" 
                       JOIN "equipment" ON "equipment_id" = "equipment"."id" WHERE "class_id" = $1;`;
        pool.query(query, [req.params.id]).then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('ERROR', error);
            res.sendStatus(500);
        });
    }
    else {
        res.send('You are not logged in!');
    }
})
// GET route for individual characters
router.get('/:id', (req, res) => {
    if (req.isAuthenticated()) {
        const value = [req.params.id];
        const query = `SELECT * from "character"
                        JOIN "class" on "class_id" = "class"."id"
                        JOIN "race" on "race_id" = "race"."id"
                        JOIN "background" on "background_id" = "background"."id"
                        JOIN "alignment" on "alignment_id" = "alignment"."id"
                        JOIN "personality" on "personality_id" = "personality"."id"
                        JOIN "ideal" on "ideal_id" = "ideal"."id"
                        JOIN "bond" on "bond_id" = "bond"."id"
                        JOIN "flaw" on "flaw_id" = "flaw"."id"
                        WHERE "character_id" = $1;`;
        pool.query(query, value).then((result) => {
            res.send(result.rows[0]);
        }).catch((error) => {
            console.log('ERROR', error);
            res.sendStatus(500);
        });
    }
    else {
        res.send('You are not logged in')
    }
});


module.exports = router;