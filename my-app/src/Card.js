import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="bg-light-green dib shadow-5 grow ma2">
                <img alt={`${this.props.username}`} src={`https://robohash.org/${this.props.id}${this.props.username}`} />
                <h3>{this.props.username}</h3>
            </div>
        )
    }
}

export default Card;