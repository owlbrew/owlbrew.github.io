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
    getCards: function () {
        CardsActions.updateCards();
    },
    render: function () {
        return (
            <div>
                <SearchField/>
                <Cards cards={this.state.cards}/>
                <button onClick={this.getCards}>UpdateCards</button>
            </div>
        )
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
                            <Card data={card}/>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
});

var SearchField = React.createClass({
    search: function () {
        CardsActions.updateCards();
    },
    render: function () {
        return <div><input type="text" onchange={this.search} value={this.props.searchText}/></div>
    }
});

React.render(<CardController />, document.body);