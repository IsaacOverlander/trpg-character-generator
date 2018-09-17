import React, { Component } from 'react';

class MainPage extends Component {
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
                </div>
                <div className="characters">
                    <h4>Greybeard the Flamecaster!</h4>
                    <p>Class: Wizard</p>
                    <p>Race: Human</p>
                    <button>View</button>
                </div>
                <div className="characters">
                    <h4>Greybeard the Flamecaster!</h4>
                    <p>Class: Wizard</p>
                    <p>Race: Human</p>
                    <button>View</button>
                </div>
                <div className="characters">
                    <h4>Greybeard the Flamecaster!</h4>
                    <p>Class: Wizard</p>
                    <p>Race: Human</p>
                    <button>View</button>
                </div>

            </div>
        );
    }
}

export default MainPage;