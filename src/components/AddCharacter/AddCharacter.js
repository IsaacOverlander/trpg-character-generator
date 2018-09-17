import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
    user: state.user,
});

class AddCharacter extends Component {

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
                <br />
                <button className="logout">Log Out</button>
                <h3>AddCharacter</h3>

                <form>
                    <select className="select-styles">
                        <option>Class</option>
                    </select>
                    <select className="select-styles">
                        <option>Race</option>
                    </select>
                    <button>Generate Character</button>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AddCharacter);