import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import Button from '@material-ui/core/Button';
import swal from '../../../node_modules/sweetalert';
import createStats from './CreateCharacter';

const mapStateToProps = state => ({
    user: state.user,
    state,
});


class AddCharacter extends Component {
    constructor(props) {
        super(props);
        // this.state properties match database "character" columns
        this.state = {
            class_id: '',
            background_id: '',
            race_id: '',
            alignment_id: '',
            personality_id: '',
            ideal_id: '',
            bond_id: '',
            flaw_id: '',
            name: '',
            strength: '',
            dexterity: '',
            constitution: '',
            intelligence: '',
            wisdom: '',
            charisma: '',
            inspiration: '',
            proficiency: '',
            skills: [],
        }
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        // Gets classes to populate dropdown
        this.props.dispatch({ type: 'GET_CLASSES' });
        // Gets races to populate dropdown
        this.props.dispatch({ type: 'GET_RACES' });
        this.setState(createStats());
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
        if (this.props.state.character.skills.length !== 0 && this.state.skills.length === 0) {
            const skill = this.props.state.character.skills;
            this.setState({
                ...this.state,
                skills: [skill[0].skill_value,
                         skill[1].skill_value,
                         skill[2].skill_value,
                         skill[3].skill_value,
                         skill[4].skill_value,
                         skill[5].skill_value,
                         skill[6].skill_value,
                         skill[7].skill_value,
                         skill[8].skill_value,
                         skill[9].skill_value,
                         skill[10].skill_value,
                         skill[11].skill_value,
                         skill[12].skill_value,
                         skill[13].skill_value,
                         skill[14].skill_value,
                         skill[15].skill_value,
                         skill[16].skill_value,
                         skill[17].skill_value,],
            });
        }
    }

    // Function for logging out the current user
    logout = () => {
        this.props.dispatch(triggerLogout());
    }

    // function for returning to the main page when the back button is clicked
    back = () => {
        this.props.history.push('main');
    }

    // function for sending generated character to the database
    generateCharacter = () => {
        this.props.dispatch({ type: 'CREATE_CHARACTER', payload: this.state });
        swal('Character was created').then(() => {
            this.props.history.push('main');
        })
    }

    handleChange = (event) => {
        if (event.target.name === 'class_id') {
            // Gets skills to determine proficiencies
            this.props.dispatch({ type: 'GET_CLASS_SKILLS', payload: event.target.value });
        }
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="center-page-div">
                <br />
                {/* Log out button and Back button */}
                <Button variant="contained" color="secondary" className="logout" onClick={this.logout}>Log Out</Button>
                <Button variant="contained" color="primary" className="back" onClick={this.back}>Back</Button>
                <h3>AddCharacter</h3>
                <form>
                    {/* Race dropdown */}
                    <select value={this.state.race_id} onChange={this.handleChange} name="race_id" className="select-styles">
                        <option>Select a race</option>
                        {this.props.state.character.races.map((raceoption) => {
                            return (
                                <option key={raceoption.id} value={raceoption.id}>{raceoption.race_name}</option>
                            )
                        })}
                    </select>
                    {/* Class Dropdown */}
                    <select value={this.state.class_id} onChange={this.handleChange} name="class_id" className="select-styles">
                        <option>Select a class</option>
                        {this.props.state.character.classes.map((classoption) => {
                            return (
                                <option key={classoption.id} value={classoption.id}>{classoption.class_name}</option>
                            )
                        })}
                    </select>
                    {/* Generate Character button */}
                    <Button variant="contained" color="primary" onClick={() => this.generateCharacter()}>Generate Character</Button>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AddCharacter);