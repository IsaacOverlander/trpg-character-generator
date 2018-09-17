import React, {Component} from 'react';

class AddCharacter extends Component {
    render () {
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

export default AddCharacter;