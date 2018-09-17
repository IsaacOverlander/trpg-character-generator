import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

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

    render() {
        return (
            <div className="center-page-div">
                <button className="logout">Log Out</button>
                <br />
                <h3>Add Information</h3>
                <form className="form">
                    <select className="select-styles">
                        <option>Table</option>
                    </select>
                    <br/>
                    <input />
                    <br />
                    <input />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AdminPage);