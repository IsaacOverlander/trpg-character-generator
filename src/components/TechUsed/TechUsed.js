import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
class TechUsed extends Component {

    toMain = () => {
        this.props.history.push('main');
    }

    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.toMain}>Back</Button>
                <div className="center-page-div background-lightgray">
                    <p>Node</p>
                    <p>Express</p>
                    <p>React</p>
                    <p>React-Redux</p>
                    <p>Redux-Sagas</p>
                    <p>D20.js</p>
                    <p>Material UI</p>
                    <p>PostgreSQL</p>
                </div>
            </div>

        )
    }
}

export default TechUsed;