import React, { Component } from 'react';
import Card from "./Card";

class CardList extends Component {
    render() {
        const Cards = this.props.users.map((user, i) => {
            return <Card key={i} id={user.id} username={user.username} />
        })
        return (
            <div>
                {Cards}
            </div>
        )
    }
}

export default CardList;