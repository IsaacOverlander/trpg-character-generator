import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import Button from '@material-ui/core/Button';
import createCharacter from './CreateCharacter';
import swal from '../../../node_modules/sweetalert';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class AddCharacter extends Component {

constructor() {
    super();
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
    }
}

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        // Gets classes to populate dropdown
        this.props.dispatch({ type: 'GET_CLASSES' });
        // Gets races to populate dropdown
        this.props.dispatch({ type: 'GET_RACES' });
        // randomizes properties then sets state
        this.setState(createCharacter());
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
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
        this.props.dispatch({type: 'CREATE_CHARACTER', payload: this.state});
        swal('Character was created').then(() => {
            this.props.history.push('main');
        })
    }

    render() {
        return (
            <div className="center-page-div">
                <br />
                {/* Log out button */}
                <Button variant="contained" color="secondary" className="logout" onClick={this.logout}>Log Out</Button>
                {/* Back button */}
                <Button variant="contained" color="primary" className="back" onClick={this.back}>Back</Button>
                <h3>AddCharacter</h3>
                <form>
                    {/* Race dropdown */}
                    <select className="select-styles">
                        <option>Select a race</option>
                        {this.props.state.character.races.map((raceoption) => {
                            return (
                                <option key={raceoption.id} value={raceoption.id}>{raceoption.race_name}</option>
                            )
                        })}
                    </select>
                    {/* Class Dropdown */}
                    <select className="select-styles">
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