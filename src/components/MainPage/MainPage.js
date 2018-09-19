import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { triggerLogout } from '../../redux/actions/loginActions';

const mapStateToProps = state => ({
    user: state.user,
    state,
});

class MainPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({ type: 'GET_CHARACTERS' })
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    logout = () => {
        this.props.dispatch(triggerLogout());
    }

    toAddCharacters = () => {
        this.props.history.push('add');
    }

    toCharacter = (id) => {
        this.props.history.push(`character/${id}`);
    }

    render() {
        return (
            <div>
                <Grid container justify={"center"} cols={12}>
                    <Grid item md={12} >
                        <Button variant="contained" color="secondary" className="logout" onClick={this.logout}>Log Out</Button>
                    </Grid>
                    <Grid item md={1}>
                        <h3>Characters</h3>
                    </Grid>
                </Grid>
                <Grid container justify={"center"}>
                    <Grid item md={1} >
                        <Button variant="contained" color="primary" onClick={this.toAddCharacters}>Add Character</Button>
                    </Grid>
                </Grid>
                <Grid container justify={"space-evenly"}>
                    {this.props.state.character.characters.map((character) => {
                        return (
                            <Card key={character.id} className="characters">
                                <h4>{character.name}</h4>
                                <p>Class: {character.class_name}</p>
                                <p>Race: Human</p>
                                <Button variant="contained" color="primary" onClick={() => this.toCharacter(character.id)}>View</Button>
                                <Button variant="contained" color="secondary">Delete</Button>
                            </Card>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}

export default connect(mapStateToProps)(MainPage);