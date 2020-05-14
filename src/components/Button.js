import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Buttons extends Component {
    render() {
        return (
            // <div className="open-search">
            <div >
                <Link
                    to={this.props.to}
                >
                    <button className="button-location">{this.props.name}</button>
                </Link>
            </div >
        )
    }
}


export default Buttons;