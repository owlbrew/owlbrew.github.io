/** Actions */

var CardsActions = Flux.createActions({
    updateCards: function (searchText) {
        return {
            actionType: "UPDATE_CARDS",
            searchText: searchText
        }
    }
});

var getCards = function () {
    return CardStore.getCards();
}

/** Controller View */

var CardController = React.createClass({
    mixins: [CardStore.mixin],
    getInitialState: function () {
        return {
            cards: getCards(),
            searchText: 'test'
        };
    },
    storeDidChange: function () {
        this.setState({
            cards: getCards(),
            searchText: this.state.searchText
        });
    },
    handleUserInput: function (searchText) {
        this.setState({
            cards: this.state.cards,
            searchText: searchText
        });
        this.getCards();
    },
    getCards: function () {
        CardsActions.updateCards(this.state.searchText);
    },
    render: function () {
        return (
            <div>
                <SearchField searchText={this.state.searchText} onUserInput={this.handleUserInput}/>
                <Cards cards={this.state.cards}/>
                <button onClick={this.getCards}>UpdateCards</button>
            </div>
        )
    },
    componentWillMount: function() {
        this.getCards = _.debounce(this.getCards, 100);
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
    handleChange: function () {
        this.props.onUserInput(
            this.refs.searchTextInput.getDOMNode().value
        );
    },
    render: function () {
        return <form><input type="text" ref="searchTextInput" onChange={this.handleChange}
                            value={this.props.searchText}/></form>
    }
});

React.render(<CardController />, document.body);