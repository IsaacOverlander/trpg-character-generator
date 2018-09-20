import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

//Sample Character that is displayed on the landing page
class CharacterSheet extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid container spacing={24}>
                        <Grid item className="height-50">
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={24} alignItems={"flex-start"} justify={"space-evenly"} className={"character-sheet"}>
                    <Grid item sm={6} className="align-left border">
                        <div>Name: Burfoot the Doorslayer</div>
                    </Grid>
                    <Grid item sm={6} className="border">
                        <Grid container>
                            <Grid item lg={6} className="align-left">
                                <div>Class: lvl 1 Rogue </div>
                                <div>Background: Criminal</div>
                            </Grid>
                            <Grid item lg={6} className="align-left">
                                <div>Race: Halfling</div>
                                <div>Alignment: Chaotic Neutral</div>
                                <div>EXP: 0</div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={1} className="align-left">
                        <div>Strength</div>
                        <br />
                        <div><span className="attribute">12</span> <span className="mod">+1</span></div>
                        <br />
                        <div>Dexterity</div>
                        <br />
                        <div><span className="attribute">17</span> <span className="mod">+3</span></div>
                        <br />
                        <div>Constitution</div>
                        <br />
                        <div><span className="attribute">13</span> <span className="mod">+1</span></div>
                        <br />
                        <div>Intelligence</div>
                        <br />
                        <div><span className="attribute">9</span> <span className="mod">-1</span></div>
                        <br />
                        <div>Wisdom</div>
                        <br />
                        <div><span className="attribute">14</span> <span className="mod">+2</span></div>
                        <br />
                        <div>Charisma</div>
                        <br />
                        <div><span className="attribute">11</span> <span className="mod">+0</span></div>
                        <br />
                        <div>Passive Wisdom</div>
                        <br />
                        <div><span className="attribute">16</span></div>
                        <br />
                        <div>Languages</div>
                        <div className="border">
                            <p>Halfling</p>
                            <p>Common</p>
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
                            <input type="radio" checked />__<label>Dexterity</label>
                            <br />
                            <input type="radio" disabled />__<label>Constitution</label>
                            <br />
                            <input type="radio" checked />__<label>Intelligence</label>
                            <br />
                            <input type="radio" disabled />__<label>Wisdom</label>
                            <br />
                            <input type="radio" disabled />__<label>Charisma</label>
                        </div>
                        <div className="border skills">
                            <input type="radio" checked />__<label>Acrobatics</label>
                            <br />
                            <input type="radio" disabled />__<label>Animal Handling</label>
                            <br />
                            <input type="radio" disabled />__<label>Arcana</label>
                            <br />
                            <input type="radio" disabled />__<label>Athletics</label>
                            <br />
                            <input type="radio" checked />__<label>Deception</label>
                            <br />
                            <input type="radio" disabled />__<label>History</label>
                            <br />
                            <input type="radio" disabled />__<label>Insight</label>
                            <br />
                            <input type="radio" disabled />__<label>Intimidation</label>
                            <br />
                            <input type="radio" checked />__<label>Investigation</label>
                            <br />
                            <input type="radio" disabled />__<label>Medicine</label>
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
                            <input type="radio" checked />__<label>Slight of Hand</label>
                            <br />
                            <input type="radio" checked />__<label>Stealth</label>
                            <br />
                            <input type="radio" disabled />__<label>Survival</label>
                        </div>
                    </Grid>
                    <Grid item sm={3} >
                        <Grid container>
                            <Grid container className="border" justify={"space-evenly"}>
                                <Grid item md={2}>
                                    <p className="attribute">16</p><p>AC</p>
                                </Grid>
                                <Grid item md={2}>
                                    <p className="attribute">+3</p><p>Initiative</p>
                                </Grid>
                                <Grid item md={2}>
                                    <p className="attribute">25</p><p>Speed</p>
                                </Grid>
                                <Grid item md={12} className="border height-75 center-page-div">
                                    Current HP
                                    <p>10</p>
                                </Grid>
                                <Grid item md={12} className="border height-75 center-page-div">
                                    Temporary HP
                                </Grid>
                                <Grid item md={6} className="border height-75 center-page-div">
                                    Hit Dice
                                    <p>1d8</p>
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
                                    +5
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    1d4 + 5
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    Short Bow
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    +5
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    1d8 + 5
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    Shortsword
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    + 3
                                </Grid>
                                <Grid item md={4} className="border height-25">
                                    1d6 + 3
                                </Grid>
                                <Grid item md={12} className="border height-150">

                                </Grid>
                            </Grid>
                            <p>Equipment</p>
                            <Grid container className="border height-150" justify={'flex-start'}>
                                <Grid item md={6}>
                                    <p>75 GP</p>
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
                                <p>Expertise</p>
                                <p>Sneak Attack</p>
                                <p>Thieves' Cant</p>
                                <p>Cunning Action</p>
                                <p>Lucky</p>
                                <p>Brave</p>
                                <p>Halfling nimbleness</p>
                                <p>Naturally Stealthy</p>
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