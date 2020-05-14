import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="list-books-title">
                <h1>MyReads {this.props.pagename}</h1>
            </div>
        )
    }
}

export default Header;