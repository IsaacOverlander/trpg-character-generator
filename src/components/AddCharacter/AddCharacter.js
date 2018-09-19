import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import Button from '@material-ui/core/Button';


const mapStateToProps = state => ({
    user: state.user,
    state,
});

class AddCharacter extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({ type: 'GET_CLASSES' });
        this.props.dispatch({ type: 'GET_RACES' });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    logout = () => {
        this.props.dispatch(triggerLogout());
    }

    back = () => {
        this.props.history.push('main');
    }

    createCharacter = () => {
        this.props.history.push('character/1')
    }

    render() {
        return (
            <div className="center-page-div">
                <br />
                <Button variant="contained" color="secondary" className="logout" onClick={this.logout}>Log Out</Button>
                <Button variant="contained" color="primary" className="back" onClick={this.back}>Back</Button>
                <h3>AddCharacter</h3>
                <form>
                    <select className="select-styles">
                        <option>Select a race</option>
                        {this.props.state.character.races.map((raceoption) => {
                            return (
                                <option key={raceoption.id} value={raceoption.id}>{raceoption.race_name}</option>
                            )
                        })}
                    </select>
                    <select className="select-styles">
                        <option>Select a class</option>
                        {this.props.state.character.classes.map((classoption) => {
                            return (
                                <option key={classoption.id} value={classoption.id}>{classoption.class_name}</option>
                            )
                        })}
                    </select>
                    <Button variant="contained" color="primary" onClick={() => this.createCharacter()}>Generate Character</Button>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AddCharacter);