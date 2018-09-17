import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
});

class MainPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    render() {
        return (
            <div className="center-page-div">
                <button className="logout">Log Out</button>
                <br />
                <h3>Characters</h3>
                <button>Add Character</button>
                <br />
                <div className="characters">
                    <h4>Greybeard the Flamecaster!</h4>
                    <p>Class: Wizard</p>
                    <p>Race: Human</p>
                    <button>View</button>
                    <button>Delete</button>
                </div>
                <div className="characters">
                    <h4>Greybeard the Flamecaster!</h4>
                    <p>Class: Wizard</p>
                    <p>Race: Human</p>
                    <button>View</button>
                    <button>Delete</button>
                </div>
                <div className="characters">
                    <h4>Greybeard the Flamecaster!</h4>
                    <p>Class: Wizard</p>
                    <p>Race: Human</p>
                    <button>View</button>
                    <button>Delete</button>
                </div>
                <div className="characters">
                    <h4>Greybeard the Flamecaster!</h4>
                    <p>Class: Wizard</p>
                    <p>Race: Human</p>
                    <button>View</button>
                    <button>Delete</button>
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps)(MainPage);