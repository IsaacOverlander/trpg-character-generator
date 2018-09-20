import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
    user: state.user,
});

class AdminPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    // Funciton for logginf out the current user
    logout = () => {
        this.props.dispatch(triggerLogout());
    }

    render() {
        return (
            <div className="center-page-div">
                {/* Log out button */}
                <button className="logout" onClick={this.logout}>Log Out</button>
                <br />
                <h3>Add Information</h3>
                {/* Form for adding information to the database */}
                <form className="form">
                {/* Dropdown for selecting which database table to add to */}
                    <select className="select-styles">
                        <option>Table</option>
                    </select>
                    <br />
                    {/* Inputs that will change based on the table that is selected */}
                    <input />
                    <br />
                    <input />
                    <br />
                    {/* Button to submit form */}
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AdminPage);