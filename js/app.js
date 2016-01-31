/** Controller View */

var CardController = React.createClass({
    mixins: [CardStore.mixin],
    getInitialState: function () {
        return {
            deck: getDeck(),
            cards: getCards(),
            searchText: '',
            searchCardTypeText: ''
        };
    },
    storeDidChange: function () {
        this.setState({
            deck: getDeck(),
            cards: getCards(),
            searchText: this.state.searchText,
            searchCardTypeText: this.state.searchCardTypeText
        });
    },
    handleUserInput: function (searchText) {
        this.setState({
            deck: this.state.deck,
            cards: this.state.cards,
            searchText: searchText,
            searchCardTypeText: this.state.searchCardTypeText
        });
        this.getCards();
    },
    handleCardTypeUserInput: function (cardType) {
        this.setState({
            deck: this.state.deck,
            cards: this.state.cards,
            searchText: this.state.searchText,
            searchCardTypeText: cardType
        });
        this.getCards();
    },
    getCards: function () {
        CardsActions.updateCards(this.state.searchText, this.state.searchCardTypeText);
    },
    addCardToDeck(card) {
        CardsActions.addCardToDeck(card);
    },
    removeCardfromDeck(card) {
        CardsActions.removeCardfromDeck(card);
    },
    render: function () {
        return (
            <div className="app">
                <SearchResults cards={this.state.cards} cardClickedCallback={this.addCardToDeck}/>
                <Deck cards={this.state.deck.cards} cardClickedCallback={this.removeCardfromDeck}/>
                <SearchBar searchText={this.state.searchText} searchCardTypeText={this.state.searchCardTypeText} handleInputCallback={this.handleUserInput} handleCardTypeInputCallback={this.handleCardTypeUserInput}/>
            </div>
        )
    },
    componentWillMount: function () {
        this.getCards = _.debounce(this.getCards, 100);
    }
});

React.render(<CardController />, document.body);