import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="tc bg-light-green dib grow ma2 pa2 shadow-5">
                <img alt={`${this.props.name}`} src={`https://robohash.org/${this.props.name}${this.props.id}`} />
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
            </div>
        )
    }
}

export default Card;