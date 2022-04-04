import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="tc bg-light-green dib shadow-5 grow ma2">
                <img alt={`${this.props.name}`} src={`https://robohash.org/${this.props.id}${this.props.name}${this.props.email}`} />
                <h3>{this.props.name}</h3>
                <p>{this.props.email}</p>
            </div>
        )
    }
}

export default Card;