import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

//Sample Character that is displayed on the landing page
class CharacterSheet extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item className="height-50">
                    </Grid>
                </Grid>
                <Grid container spacing={24} alignItems={"flex-start"} justify={"space-evenly"} className={"character-sheet"}>
                    <Grid item sm={6} className="align-left border">
                        <div>Name: Greybeard the Flamecaster</div>
                    </Grid>
                    <Grid item sm={6} className="border">
                        <Grid container>
                            <Grid item lg={6} className="align-left">
                                <div>Class: lvl 1 wizard </div>
                                <div>Background: Acolyte</div>
                            </Grid>
                            <Grid item lg={6} className="align-left">
                                <div>Race: Human</div>
                                <div>Alignment: Chaotic Evil</div>
                                <div>EXP: 0</div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={1} className="align-left">
                        <div>Strength</div>
                        <br />
                        <div><span className="attribute">10</span> <span className="mod">+0</span></div>
                        <br />
                        <div>Dexterity</div>
                        <br />
                        <div><span className="attribute">14</span> <span className="mod">+2</span></div>
                        <br />
                        <div>Constitution</div>
                        <br />
                        <div><span className="attribute">13</span> <span className="mod">+1</span></div>
                        <br />
                        <div>Intelligence</div>
                        <br />
                        <div><span className="attribute">18</span> <span className="mod">+4</span></div>
                        <br />
                        <div>Wisdom</div>
                        <br />
                        <div><span className="attribute">17</span> <span className="mod">+3</span></div>
                        <br />
                        <div>Charisma</div>
                        <br />
                        <div><span className="attribute">16</span> <span className="mod">+3</span></div>
                        <br />
                        <div>Passive Wisdom</div>
                        <br />
                        <div><span className="attribute">17</span></div>
                        <br />
                        <div>Languages</div>
                        <div className="border">
                            <p>elvish</p>
                            <p>Common</p>
                            <p>Daconic</p>
                        </div>
                    </Grid>
                    <Grid item sm={1} className="align-left">
                        <div>
                            <span className="attribute">0</span><span className="mod">Inspiration</span>
                        </div>
                        <br />
                        <br />
                        <div>
                            <span className="attribute">2</span><span className="mod">Proficiency</span>
                        </div>
                        <br />
                        <div className="border skills">
                            <input type="radio" disabled />__<label>Strength</label>
                            <br />
                            <input type="radio" disabled />__<label>Dexterity</label>
                            <br />
                            <input type="radio" checked />__<label>Constitution</label>
                            <br />
                            <input type="radio" checked />__<label>Intelligence</label>
                            <br />
                            <input type="radio" disabled />__<label>Wisdom</label>
                            <br />
                            <input type="radio" disabled />__<label>Charisma</label>
                        </div>
                        <div className="border skills">
                            <input type="radio" disabled />__<label>Acrobatics</label>
                            <br />
                            <input type="radio" disabled />__<label>Animal Handling</label>
                            <br />
                            <input type="radio" checked />__<label>Arcana</label>
                            <br />
                            <input type="radio" disabled />__<label>Athletics</label>
                            <br />
                            <input type="radio" disabled />__<label>Deception</label>
                            <br />
                            <input type="radio" checked />__<label>History</label>
                            <br />
                            <input type="radio" checked />__<label>Insight</label>
                            <br />
                            <input type="radio" disabled />__<label>Intimidation</label>
                            <br />
                            <input type="radio" disabled />__<label>Investigation</label>
                            <br />
                            <input type="radio" checked />__<label>Medicine</label>
                            <br />
                            <input type="radio" disabled />__<label>Nature</label>
                            <br />
                            <input type="radio" checked />__<label>Perception</label>
                            <br />
                            <input type="radio" disabled />__<label>Performance</label>
                            <br />
                            <input type="radio" disabled />__<label>Persuasion</label>
                            <br />
                            <input type="radio" disabled />__<label>Religion</label>
                            <br />
                            <input type="radio" disabled />__<label>Slight of Hand</label>
                            <br />
                            <input type="radio" disabled />__<label>Stealth</label>
                            <br />
                            <input type="radio" checked />__<label>Survival</label>
                        </div>
                    </Grid>
                    <Grid item sm={3} >
                        <Grid container>
                            <Grid container className="border" justify={"space-evenly"}>
                                <Grid item md={2}>
                                    <p className="attribute">14</p><p>AC</p>
                                </Grid>
                                <Grid item md={2}>
                                    <p className="attribute">+2</p><p>Initiative</p>
                                </Grid>
                                <Grid item md={2}>
                                    <p className="attribute">30</p><p>Speed</p>
                                </Grid>
                                <Grid item md={12} className="border height-75 center-page-div">
                                    Current HP
                                    <p>7</p>
                                </Grid>
                                <Grid item md={12} className="border height-75 center-page-div">
                                    Temporary HP
                                </Grid>
                                <Grid item md={6} className="border height-75 center-page-div">
                                    Hit Dice
                                    <p>1d6</p>
                                </Grid>
                                <Grid item md={6} className="border height-75 align-left">
                                    Death Saves
                                    <br />
                                    <input type="radio" /><input type="radio" /><input type="radio" /><span>Successes</span>
                                    <br />
                                    <input type="radio" /><input type="radio" /><input type="radio" /><span>Failures</span>
                                </Grid>
                            </Grid>
                            <p>Attacks</p>
                            <Grid container className="border" justify={"space-evenly"}>
                                <Grid item md={4}>
                                    Name
                                </Grid>
                                <Grid item md={4}>
                                    Bonus
                                </Grid>
                                <Grid item md={4}>
                                    Damage
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    Dagger
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    +4
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    1d4 + 4
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    Quarterstaff
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    +3
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    1d6 + 3
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    Shortsword
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    +2
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    1d6 + 2
                                </Grid>
                                <Grid item md={12} className="border height-150">

                                </Grid>
                            </Grid>
                            <p>Equipment</p>
                            <Grid container className="border height-150" justify={'flex-start'}>
                                <Grid item md={6}>
                                    <p>15 GP</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={3}>
                        <Grid container className="border" justify={"center"}>
                            <Grid item lg={11} className="border traits">
                                <p>Personality</p>
                                <p>I'm driven by a wanderlust that led me away from home.</p>
                            </Grid>
                            <Grid item lg={11} className="border traits">
                                <p>Ideal</p>
                                <p>If you know yourself, there're nothing left to know.</p>
                            </Grid>
                            <Grid item lg={11} className="border traits">
                                <p>Bond</p>
                                <p>Everything I do is for the common people.</p>
                            </Grid>
                            <Grid item lg={11} className="border traits">
                                <p>Flaw</p>
                                <p>Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.</p>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container className="border max-height">
                            <Grid item md={6}>
                                <p>Arcane Inspiration</p>
                                <p>Lucky</p>
                                <p>Brave</p>
                            </Grid>
                            <Grid item md={6}>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default CharacterSheet;