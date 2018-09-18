import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class CharacterSheet extends Component {
    render() {
        return (
            <div className="center-page-div">
                <Grid container spacing={24}>
                    <Grid item lg={12}>
                        Sample Character
                    </Grid>
                </Grid>
                <Grid container spacing={24} alignItems={"flex-start"} justify={"space-evenly"} className={"character-sheet"}>
                    <Grid item lg={6} className="align-left border">
                        <div>Name: Burfoot the Doorslayer</div>
                    </Grid>
                    <Grid item lg={6} className="border">
                        <Grid container>
                            <Grid item lg={6} className="align-left">
                                <div>Class: lvl 1  Rogue</div>
                                <div>Background: criminal</div>
                                <div>Player: Isaac Overlander</div>
                            </Grid>
                            <Grid item lg={6} className="align-left">
                                <div>Race: Halfling </div>
                                <div>Alignment: Chaotic Neutral </div>
                                <div>EXP: 0 </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={1} className="align-left">
                        <div>Strength</div>
                        <br />
                        <div><span className="attribute">10</span> <span className="mod">+0</span></div>
                        <br />
                        <div>Dexterity</div>
                        <br />
                        <div><span className="attribute">18</span> <span className="mod">+4</span></div>
                        <br />
                        <div>Constitution</div>
                        <br />
                        <div><span className="attribute">16</span> <span className="mod">+3</span></div>
                        <br />
                        <div>Intelligence</div>
                        <br />
                        <div><span className="attribute">12</span> <span className="mod">+1</span></div>
                        <br />
                        <div>Wisdom</div>
                        <br />
                        <div><span className="attribute">13</span> <span className="mod">+1</span></div>
                        <br />
                        <div>Charisma</div>
                        <br />
                        <div><span className="attribute">11</span> <span className="mod">+0</span></div>
                        <br />
                        <div>Passive Wisdom</div>
                        <br />
                        <div><span className="attribute">14</span></div>
                        <br />
                        <div>Languages/Skills</div>
                        <div className="border">
                            <p>Halfling</p>
                            <p>Common</p>
                            <p>elvish</p>
                            <p>dwarvish</p>
                        </div>
                    </Grid>
                    <Grid item lg={1} className="align-left">
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
                            <input type="radio" checked />__<label>Constitution</label>
                            <br />
                            <input type="radio" disabled />__<label>Intelligence</label>
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
                            <input type="radio" checked />__<label>Athletics</label>
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
                            <input type="radio" checked />__<label>Performance</label>
                            <br />
                            <input type="radio" disabled />__<label>Persuasion</label>
                            <br />
                            <input type="radio" disabled />__<label>Religion</label>
                            <br />
                            <input type="radio" disabled />__<label>Slight of Hand</label>
                            <br />
                            <input type="radio" checked />__<label>Stealth</label>
                            <br />
                            <input type="radio" disabled />__<label>Survival</label>
                        </div>
                    </Grid>
                    <Grid item lg={3} >
                        <Grid container>
                            <Grid container className="border" justify={"space-evenly"}>
                                <Grid item lg={1}>
                                    <p className="attribute">16</p><p>AC</p>
                                </Grid>
                                <Grid item lg={1}>
                                    <p className="attribute">+5</p><p>Initiative</p>
                                </Grid>
                                <Grid item lg={1}>
                                    <p className="attribute">25</p><p>Speed</p>
                                </Grid>
                                <Grid item lg={12} className="border height-75">
                                    Current HP
                                    <p>11/11</p>
                                </Grid>
                                <Grid item lg={12} className="border height-75">
                                    Temporary HP
                                    <p>N/A</p>
                                </Grid>
                                <Grid item lg={6} className="border height-75">
                                    Hit Dice
                                    <p>1d8/1d8</p>
                                </Grid>
                                <Grid item lg={6} className="border height-75">
                                    Death Saves
                                    <p><span>0/3 Successes</span> <span>0/3 Failures</span></p>
                                </Grid>
                            </Grid>
                            <p>Attacks</p>
                            <Grid container className="border" justify={"space-evenly"}>
                                <Grid item lg={4}>
                                    Name
                                </Grid>
                                <Grid item lg={4}>
                                    Bonus
                                </Grid>
                                <Grid item lg={4}>
                                    Damage/Type
                                </Grid>
                                <Grid item lg={4} className="border height-25">
                                    Short Bow
                                </Grid>
                                <Grid item lg={4} className="border height-25">
                                    +7
                                </Grid>
                                <Grid item lg={4} className="border height-25">
                                    1d8 + 6
                                </Grid>
                                <Grid item lg={4} className="border height-25">
                                    dagger
                                </Grid>
                                <Grid item lg={4} className="border height-25">
                                    +7
                                </Grid>
                                <Grid item lg={4} className="border height-25">
                                    1d4 + 4
                                </Grid>
                                <Grid item lg={4} className="border height-25">
                                    Shortsword
                                </Grid>
                                <Grid item lg={4} className="border height-25">
                                    +2
                                </Grid>
                                <Grid item lg={4} className="border height-25">
                                    1d6 + 2
                                </Grid>
                                <Grid item lg={4} className="border height-150 align-left">
                                    <p>Leather Armor</p>
                                    <p>Bolts x25</p>
                                    <p>Lockpick</p>
                                    <p>Thieves Tools</p>
                                </Grid>
                                <Grid item lg={4} className="border height-150 align-left">
                                </Grid>
                                <Grid item lg={4} className="border height-150 align-left">
                                </Grid>
                            </Grid>
                            <p>Other Equipment</p>
                            <Grid container className="border height-150" justify={'flex-start'}>
                                <Grid item lg={4} className="border height-150 align-left">
                                    <p>75 GP</p>
                                </Grid>
                                <Grid item lg={4} className="border height-150 align-left">
                                </Grid>
                                <Grid item lg={4} className="border height-150 align-left">
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3}>
                        <Grid container className="border" justify={"center"}>
                            <Grid item lg={11} className="border skills">
                                <p>Personality</p>
                                <p>I have a joke for every occasion, especially occasions where humor is inappropriate.</p>
                            </Grid>
                            <Grid item lg={11} className="border skills">
                                <p>Ideal</p>
                                <p>I must earn glory in battle, for myself and my clan.</p>
                            </Grid>
                            <Grid item lg={11} className="border skills">
                                <p>Bond</p>
                                <p>I sold my soul for knowledge. I hope to do great deeds and win it back.</p>
                            </Grid>
                            <Grid item lg={11} className="border skills">
                                <p>Flaw</p>
                                <p>I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.</p>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container className="border max-height">
                            <Grid item lg={4} className="align-left">
                                <p>Expertise</p>
                                <p>Sneak Attack</p>
                                <p>Thieves' Cant</p>
                                <p>Cunning Action</p>
                                <p>Lucky</p>
                                <p>Brave</p>
                                <p>Halfling Nimbleness</p>
                                <p>Naturally Stealthy</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default CharacterSheet;