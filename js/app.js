

/** Actions */

var CardsActions = Flux.createActions({
    updateCards: function () {
        return {
            actionType: "UPDATE_CARDS"
        }
    }
});

function getCards() {
    return {
        cards: CardStore.getCards()
    }
}

/** Controller View */

var CardController = React.createClass({
    mixins: [CardStore.mixin],
    getInitialState: function () {
        return getCards();
    },
    storeDidChange: function () {
        this.setState(getCards());
    },
    render: function () {
        return <UI cards={this.state.cards}/>;
    }
});

/** Component */

var Card = React.createClass({
    render: function () {
        return (
            <div>
                <h1>{this.props.data.name}</h1>
                <img src={this.props.data.editions[0].image_url}/>
            </div>
        )
    }
});

var Cards = React.createClass({
    render: function () {
        return (
            <div className="mtg_app">
                <ul className="cards">
                    { this.props.cards.map(function (card) {
                        return <li key={card.id}>
                            oi
                            <Card data={card}/>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
});

var UI = React.createClass({
    getCards: function () {
        CardsActions.updateCards();
    },
    render: function () {
        return (
            <div>
                <Cards cards={this.props.cards}/>
                <button onClick={this.getCards}>UpdateCards</button>
            </div>
        )
    }
});

React.render(<CardController />, document.body);