import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class CharacterSheet extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({ type: 'GET_CHARACTER_BY_ID', payload: this.props.match.params.id })
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    logout = () => {
        this.props.dispatch(triggerLogout());
    }

    render() {
        const character = this.props.state.character.characterById
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item sm={12}>
                        <button className="logout">Log Out</button>
                    </Grid>
                    <Grid item sm={12} className="center-page-div">
                        <button >Save Character</button>
                    </Grid>
                </Grid>
                <Grid container spacing={24} alignItems={"flex-start"} justify={"space-evenly"} className={"character-sheet"}>
                    <Grid item sm={6} className="align-left border">
                        <div>Name: {character.name}</div>
                    </Grid>
                    <Grid item sm={6} className="border">
                        <Grid container>
                            <Grid item lg={6} className="align-left">
                                <div>Class: lvl {character.lvl} {character.class_name} </div>
                                <div>Background: {character.background_name}</div>
                            </Grid>
                            <Grid item lg={6} className="align-left">
                                <div>Race: {character.race_name}</div>
                                <div>Alignment: {character.alignment_name}</div>
                                <div>EXP: {character.experience}</div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={1} className="align-left">
                        <div>Strength</div>
                        <br />
                        <div><span className="attribute">{character.strength}</span> <span className="mod">+4</span></div>
                        <br />
                        <div>Dexterity</div>
                        <br />
                        <div><span className="attribute">{character.dexterity}</span> <span className="mod">+4</span></div>
                        <br />
                        <div>Constitution</div>
                        <br />
                        <div><span className="attribute">{character.constitution}</span> <span className="mod">+4</span></div>
                        <br />
                        <div>Intelligence</div>
                        <br />
                        <div><span className="attribute">{character.intelligence}</span> <span className="mod">+4</span></div>
                        <br />
                        <div>Wisdom</div>
                        <br />
                        <div><span className="attribute">{character.wisdom}</span> <span className="mod">+4</span></div>
                        <br />
                        <div>Charisma</div>
                        <br />
                        <div><span className="attribute">{character.charisma}</span> <span className="mod">+4</span></div>
                        <br />
                        <div>Passive Wisdom</div>
                        <br />
                        <div><span className="attribute">16</span></div>
                        <br />
                        <div>Languages/Skills</div>
                        <div className="border">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                               Aenean diam velit, hendrerit et elit in, ultricies posuere nunc.
                               Vivamus magna nisi
                            </p>
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
                            <input type="radio" />__<label>Strength</label>
                            <br />
                            <input type="radio" />__<label>Dexterity</label>
                            <br />
                            <input type="radio" />__<label>Constitution</label>
                            <br />
                            <input type="radio" />__<label>Intelligence</label>
                            <br />
                            <input type="radio" />__<label>Wisdom</label>
                            <br />
                            <input type="radio" />__<label>Charisma</label>
                        </div>
                        <div className="border skills">
                            <input type="radio" />__<label>Acrobatics</label>
                            <br />
                            <input type="radio" />__<label>Animal Handling</label>
                            <br />
                            <input type="radio" />__<label>Arcana</label>
                            <br />
                            <input type="radio" />__<label>Athletics</label>
                            <br />
                            <input type="radio" />__<label>Deception</label>
                            <br />
                            <input type="radio" />__<label>History</label>
                            <br />
                            <input type="radio" />__<label>Insight</label>
                            <br />
                            <input type="radio" />__<label>Intimidation</label>
                            <br />
                            <input type="radio" />__<label>Investigation</label>
                            <br />
                            <input type="radio" />__<label>Medicine</label>
                            <br />
                            <input type="radio" />__<label>Nature</label>
                            <br />
                            <input type="radio" />__<label>Perception</label>
                            <br />
                            <input type="radio" />__<label>Performance</label>
                            <br />
                            <input type="radio" />__<label>Persuasion</label>
                            <br />
                            <input type="radio" />__<label>Religion</label>
                            <br />
                            <input type="radio" />__<label>Slight of Hand</label>
                            <br />
                            <input type="radio" />__<label>Stealth</label>
                            <br />
                            <input type="radio" />__<label>Survival</label>
                        </div>
                    </Grid>
                    <Grid item sm={3} >
                        <Grid container>
                            <Grid container className="border" justify={"space-evenly"}>
                                <Grid item md={2}>
                                    <p className="attribute">{character.armor_class}</p><p>AC</p>
                                </Grid>
                                <Grid item md={2}>
                                    <p className="attribute">+{character.initiative}</p><p>Initiative</p>
                                </Grid>
                                <Grid item md={2}>
                                    <p className="attribute">{character.speed}</p><p>Speed</p>
                                </Grid>
                                <Grid item md={12} className="border height-75 center-page-div">
                                    Current HP
                                    <p>{character.hp}</p>
                                </Grid>
                                <Grid item md={12} className="border height-75 center-page-div">
                                    Temporary HP
                                </Grid>
                                <Grid item md={6} className="border height-75 center-page-div">
                                    Hit Dice
                                    <p>{character.lvl}{character.hit_dice}</p>
                                </Grid>
                                <Grid item md={6} className="border height-75 align-left">
                                    Death Saves
                                    <br/>
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
                                    Damage/Type
                                </Grid>
                                <Grid item md={4} className="border height-25">

                                </Grid>
                                <Grid item md={4} className="border height-25">

                                </Grid>
                                <Grid item md={4} className="border height-25">

                                </Grid>
                                <Grid item md={4} className="border height-25">

                                </Grid>
                                <Grid item md={4} className="border height-25">

                                </Grid>
                                <Grid item md={4} className="border height-25">

                                </Grid>
                                <Grid item md={4} className="border height-25">

                                </Grid>
                                <Grid item md={4} className="border height-25">

                                </Grid>
                                <Grid item md={4} className="border height-25">

                                </Grid>
                                <Grid item md={12} className="border height-150">

                                </Grid>
                            </Grid>
                            <p>Equipment</p>
                            <Grid container className="border height-150" justify={'flex-start'}></Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={3}>
                        <Grid container className="border" justify={"center"}>
                            <Grid item lg={11} className="border traits">
                                <p>Personality</p>
                                <p>{character.personality_description}</p>
                            </Grid>
                            <Grid item lg={11} className="border traits">
                                <p>Ideal</p>
                                <p>{character.ideal_description}</p>
                            </Grid>
                            <Grid item lg={11} className="border traits">
                                <p>Bond</p>
                                <p>{character.bond_description}</p>
                            </Grid>
                            <Grid item lg={11} className="border traits">
                                <p>Flaw</p>
                                <p>{character.flaw_description}</p>
                            </Grid>
                        </Grid>
                        <br />
                        <Grid container className="border max-height">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                               Nulla sed est velit. Integer pretium leo eu varius cursus.
                               Praesent faucibus nulla quis libero fringilla, a aliquet
                               est pulvinar. Integer malesuada lobortis nibh nec porttitor.
                               Pellentesque at lobortis ipsum, ut pretium orci. Duis vitae
                               tristique velit. Nulla id scelerisque risus, vel dapibus dolor.
                               Etiam eget dignissim risus.
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default connect(mapStateToProps)(CharacterSheet);