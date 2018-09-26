import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import Button from '@material-ui/core/Button';
import swal from '../../../node_modules/sweetalert';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class CharacterSheet extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            id: '',
            exp: '',
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        // dispatch to a GET request for characters based on their id
        this.props.dispatch({ type: 'GET_CHARACTER_BY_ID', payload: this.props.match.params.id });
        this.setState({
            ...this.state,
            id: this.props.match.params.id,
        });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('/home');
        }
    }

    // Function to log out the current user
    logout = () => {
        this.props.dispatch(triggerLogout());
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    }

    // Function for updating character
    saveCharacter = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_CHARACTER', payload: this.state });
        swal('Chracter has been updated!');
        this.setState({
            ...this.state,
            name: '',
            exp: '',
        });
    }

    render() {
        // Sets character variable to the information related to the page
        const characterInfo = this.props.state.character.characterById.info;
        const characterMods = this.props.state.character.characterById.mods;
        
        if (characterInfo && characterMods) {
            return (
                <div>
                    {/* Grid container for log out button and save form */}
                    <Grid container spacing={24}>
                        <Grid item sm={12}>
                            <Button variant="contained" color="secondary" className="logout" onClick={this.logout}>Log Out</Button>
                        </Grid>
                        <Grid item sm={12} className="center-page-div">
                            <form onSubmit={this.saveCharacter} className="save-form">
                                <label>Name:</label>
                                <input type="text" value={this.state.name} onChange={this.handleChange} name="name"></input><br />
                                <label> EXP: </label>
                                <input type="text" value={this.state.exp} onChange={this.handleChange} name="exp"></input><br />
                                <Button type="submit" variant="contained" color="primary" >Save Changes</Button>
                            </form>
                        </Grid>
                    </Grid>
                    {/* Grid container for character sheet */}
                    <Grid container spacing={24} alignItems={"flex-start"} justify={"space-evenly"} className="character-sheet">
                        {/* item containing character name */}
                        <Grid item sm={6} className="align-left border">
                            <div>Name: {characterInfo.name}</div>
                        </Grid>
                        {/* item containing character info */}
                        <Grid item sm={6} className="border">
                            <Grid container>
                                <Grid item lg={6} className="align-left">
                                    <div>Class: lvl {characterInfo.lvl} {characterInfo.class_name} </div>
                                    <div>Background: {characterInfo.background_name}</div>
                                </Grid>
                                <Grid item lg={6} className="align-left">
                                    <div>Race: {characterInfo.race_name}</div>
                                    <div>Alignment: {characterInfo.alignment_name}</div>
                                    <div>EXP: {characterInfo.experience}</div>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* item containing attributes and languages */}
                        <Grid item sm={1} className="align-left">
                            <div>Strength</div>
                            <br />
                            <div><span className="attribute">{characterInfo.strength}</span> <span className="mod">{characterMods.strengthModifier}</span></div>
                            <br />
                            <div>Dexterity</div>
                            <br />
                            <div><span className="attribute">{characterInfo.dexterity}</span> <span className="mod">{characterMods.dexterityModifier}</span></div>
                            <br />
                            <div>Constitution</div>
                            <br />
                            <div><span className="attribute">{characterInfo.constitution}</span> <span className="mod">{characterMods.constitutionModifier}</span></div>
                            <br />
                            <div>Intelligence</div>
                            <br />
                            <div><span className="attribute">{characterInfo.intelligence}</span> <span className="mod">{characterMods.intelligenceModifier}</span></div>
                            <br />
                            <div>Wisdom</div>
                            <br />
                            <div><span className="attribute">{characterInfo.wisdom}</span> <span className="mod">{characterMods.wisdomModifier}</span></div>
                            <br />
                            <div>Charisma</div>
                            <br />
                            <div><span className="attribute">{characterInfo.charisma}</span> <span className="mod">{characterMods.charismaModifier}</span></div>
                            <br />
                            <div>Passive Wisdom</div>
                            <br />
                            <div><span className="attribute">{characterMods.passiveWisdom}</span></div>
                            <br />
                            <div>Languages</div>
                            <div className="border">
                                {characterInfo.race_languages.map((language, i) => {
                                    return <Grid item md={12}><p>{language}</p></Grid>
                                })}
                            </div>
                        </Grid>
                        {/* item containing skills */}
                        <Grid item sm={1} className="align-left">
                            <div>
                                <span className="attribute">{characterInfo.inspiration}</span><span className="mod">Inspiration</span>
                            </div>
                            <br />
                            <br />
                            <div>
                                <span className="attribute">{characterInfo.proficiency}</span><span className="mod">Proficiency</span>
                            </div>
                            <br />
                            <div className="border skills">
                                <input type="radio" readOnly checked={characterInfo.saving_throws[0]}/>__<label>Strength</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.saving_throws[1]}/>__<label>Dexterity</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.saving_throws[2]}/>__<label>Constitution</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.saving_throws[3]}/>__<label>Intelligence</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.saving_throws[4]}/>__<label>Wisdom</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.saving_throws[5]}/>__<label>Charisma</label>
                            </div>
                            <div className="border skills">
                                <input type="radio" readOnly checked={characterInfo.character_skills[0]} />__<label>Acrobatics</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[1]} />__<label>Animal Handling</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[2]} />__<label>Arcana</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[3]} />__<label>Athletics</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[4]} />__<label>Deception</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[5]} />__<label>History</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[6]} />__<label>Insight</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[7]} />__<label>Intimidation</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[8]} />__<label>Investigation</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[9]} />__<label>Medicine</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[10]} />__<label>Nature</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[11]} />__<label>Perception</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[12]} />__<label>Performance</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[13]} />__<label>Persuasion</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[14]} />__<label>Religion</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[15]} />__<label>Slight of Hand</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[16]} />__<label>Stealth</label>
                                <br />
                                <input type="radio" readOnly checked={characterInfo.character_skills[17]} />__<label>Survival</label>
                            </div>
                        </Grid>
                        {/* item containing HP, attacks, and equipment */}
                        <Grid item sm={3} >
                            <Grid container>
                                <Grid container className="border" justify={"space-evenly"}>
                                    <Grid item md={2}>
                                        <p className="attribute">{characterMods.ac}</p><p>AC</p>
                                    </Grid>
                                    <Grid item md={2}>
                                        <p className="attribute">{characterMods.dexterityModifier}</p><p>Initiative</p>
                                    </Grid>
                                    <Grid item md={2}>
                                        <p className="attribute">{characterInfo.speed}</p><p>Speed</p>
                                    </Grid>
                                    <Grid item md={12} className="border height-75 center-page-div">
                                        Current HP
                                    <p>{characterInfo.hp}</p>
                                    </Grid>
                                    <Grid item md={12} className="border height-75 center-page-div">
                                        Temporary HP
                                </Grid>
                                    <Grid item md={6} className="border height-75 center-page-div">
                                        Hit Dice
                                    <p>{characterInfo.lvl}{characterInfo.hit_dice}</p>
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
                        {/* item containing traits and class/race skills */}
                        <Grid item sm={3}>
                            <Grid container className="border" justify={"center"}>
                                <Grid item lg={11} className="border traits">
                                    <p>Personality</p>
                                    <p>{characterInfo.personality_description}</p>
                                </Grid>
                                <Grid item lg={11} className="border traits">
                                    <p>Ideal</p>
                                    <p>{characterInfo.ideal_description}</p>
                                </Grid>
                                <Grid item lg={11} className="border traits">
                                    <p>Bond</p>
                                    <p>{characterInfo.bond_description}</p>
                                </Grid>
                                <Grid item lg={11} className="border traits">
                                    <p>Flaw</p>
                                    <p>{characterInfo.flaw_description}</p>
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container className="border max-height">
                                {characterInfo.class_features.map((feature, i) => {
                                    return <Grid item md={6}><p>{feature}</p></Grid>
                                })}
                                {characterInfo.race_features.map((feature, i) => {
                                    return <Grid item md={6}><p>{feature}</p></Grid>
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </div >
            );
        }
        else {
            return <p>loading...</p>
        }
    }
}

export default connect(mapStateToProps)(CharacterSheet);