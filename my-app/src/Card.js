import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="tc bg-light-green dib grow ma2 pa2 shadow-5">
                <img alt={`${this.props.name}`} src={`https://robohash.org/${this.props.name}${this.props.id}`} />
                <h3>{this.props.name}</h3>
                <p>{this.props.email}</p>
            </div>
        )
    }
}

export default Card;