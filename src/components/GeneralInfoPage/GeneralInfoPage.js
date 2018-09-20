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
                        <p>General info about the site:Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                           mollit anim id est laborum.
                        </p>
                    </Grid>
                    {/* sample characters that anyone can view */}
                    <Grid item lg={6} className="sample-characters">
                        <Grid container justify={"center"}>
                            <Grid item lg={4}>
                                <h3>Sample Characters</h3>
                                <Card>
                                    <h4>Burfoot the Doorslayer!</h4>
                                    <p>Class: Rouge</p>
                                    <p>Race: Halfling</p>
                                    <Button variant="contained" color="primary" onClick={this.toSampleOne}>View</Button>
                                </Card>
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