import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.searchchange} className="bg-lightest-blue ba b--green pa3 bw1 mb2" type="search" placeholder="Search IronGym users..." />
            </div>
        )
    }
}

export default SearchBox;