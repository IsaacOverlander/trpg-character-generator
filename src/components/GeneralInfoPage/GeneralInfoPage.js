import React, { Component } from 'react';
import LogNav from '../LogNav/LogNav'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class GeneralInfoPage extends Component {

    toSampleOne = () => {
        this.props.history.push('sample1')
    }

    toSampleTwo = () => {
        this.props.history.push('sample2')
    }

    render() {
        return (
            <div>
                <LogNav />
                <Grid container justify={"center"}>
                    {/* general info about the site */}
                    <Grid item lg={6} className="info-paragraph">
                        <h3>General Info</h3>
                        <p>
                            TRPG character generator is a site built for the purpose of reducing the time required
                            to begin a Table Top Role-Playing Game.</p>
                        <p>
                            Currently it supports Dungeons and Dragons, but the goal is to incorporate many other games
                            such as: Vampire the Masquerade, Werewolf the Apocalypse, Shadowrun, and many more!
                            Register now to begin creating your own characters, or look at some examples of characters
                            from the options on the right! 
                        </p>
                    </Grid>
                    {/* sample characters that anyone can view */}
                    <Grid item lg={6} className="sample-characters">
                        <Grid container justify={"center"}>
                            <Grid item lg={4}>
                                <h3>Sample Characters</h3>
                                <Card>
                                    <h4>Burfoot the Doorslayer!</h4>
                                    <p>Class: Rogue</p>
                                    <p>Race: Halfling</p>
                                    <Button variant="contained" color="primary" onClick={this.toSampleOne}>View</Button>
                                </Card>
                                <br></br>
                                <Card>
                                    <h4>Greybeard the Flamecaster!</h4>
                                    <p>Class: Wizard</p>
                                    <p>Race: Human</p>
                                    <Button variant="contained" color="primary" onClick={this.toSampleTwo}>View</Button>
                                </Card>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default GeneralInfoPage;