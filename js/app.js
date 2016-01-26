/** McFly */

var Flux = new McFly();

/** Store */
_cards = [];

function updateCards() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            _cards = JSON.parse(xmlHttp.responseText);
        }
    };
    xmlHttp.open("GET", "https://api.deckbrew.com/mtg/cards", false); // false for synchronous request
    xmlHttp.send(null);
}

var CardStore = Flux.createStore({
    getCards: function () {
        return _cards;
    }
}, function (payload) {
    if (payload.actionType === "UPDATE_CARDS") {
        updateCards();
        CardStore.emitChange();
    }
});

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
        return <Cards cards={this.state.cards}/>;
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
    getCards: function () {
        CardsActions.updateCards();
    },
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
                <button onClick={this.getCards}>UpdateCards</button>
            </div>
        )
    }
});

React.render(<CardController />, document.body);