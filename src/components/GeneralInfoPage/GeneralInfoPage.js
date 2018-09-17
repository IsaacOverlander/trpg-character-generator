import React, { Component } from 'react';
import LogNav from '../LogNav/LogNav'

class GeneralInfoPage extends Component {
    render() {
        return (
            <div>
                <LogNav/>
                <div className="sample-characters">
                    <h3>Sample Characters</h3>
                    <div>
                        <h4>Burfoot the Doorslayer!</h4>
                        <p>Class: Rouge</p>
                        <p>Race: Halfling</p>
                        <button>View</button>
                    </div>
                    <div>
                        <h4>Greybeard the Flamecaster!</h4>
                        <p>Class: Wizard</p>
                        <p>Race: Human</p>
                        <button>View</button>
                    </div>
                </div>
                <div className="info-paragraph">
                    <h3>General Info</h3>
                    <p>General info about the site:Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                       mollit anim id est laborum.
                    </p>
                </div>
            </div>
        );
    }
}

export default GeneralInfoPage;