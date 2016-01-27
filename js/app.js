/** Controller View */

var CardController = React.createClass({
    mixins: [CardStore.mixin],
    getInitialState: function () {
        return {
            deckCards: [],
            cards: getCards(),
            searchText: 'test'
        };
    },
    storeDidChange: function () {
        this.setState({
            deckCards: [],
            cards: getCards(),
            searchText: this.state.searchText
        });
    },
    handleUserInput: function (searchText) {
        this.setState({
            deckCards: [],
            cards: this.state.cards,
            searchText: searchText
        });
        this.getCards();
    },
    getCards: function () {
        CardsActions.updateCards(this.state.searchText);
    },
    addCardToDeck(card) {
        console.log(card);
    },
    removeCardfromDeck(card) {
        //TODO
    },
    render: function () {
        return (
            <div className="app">
                <Deck cards={this.state.deckCards} cardClickedCallback={this.addCardToDeck}/>
                <SearchResults cards={this.state.cards} cardClickedCallback={this.addCardToDeck}/>
                <SearchBar searchText={this.state.searchText} handleInputCallback={this.handleUserInput}/>
            </div>
        )
    },
    componentWillMount: function () {
        this.getCards = _.debounce(this.getCards, 100);
    }
});

React.render(<CardController />, document.body);