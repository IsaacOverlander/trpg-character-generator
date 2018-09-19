import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


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

    toCharacter = () => {
        this.props.history.push('character/1')
    }

    render() {
        return (
            <div className="center-page-div">
                <br />
                <button className="logout" onClick={this.logout}>Log Out</button>
                <button className="back" onClick={this.back}>Back</button>
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
                    <button onClick={() => this.toCharacter()}>Generate Character</button>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AddCharacter);