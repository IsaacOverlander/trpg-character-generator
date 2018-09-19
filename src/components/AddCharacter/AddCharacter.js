import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


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
                        {this.props.state.}
                    </select>
                    <select className="select-styles">
                        <option>Race</option>
                    </select>
                    <button onClick={() => this.toCharacter()}>Generate Character</button>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(AddCharacter);