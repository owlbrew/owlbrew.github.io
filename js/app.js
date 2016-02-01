/** Controller View */

var CardController = React.createClass({
    mixins: [CardStore.mixin],
    getInitialState: function () {
        return {
            deck: getDeck(),
            cards: getCards(),
            searchText: '',
            searchOracleText: '',
            searchSubtypeText: '',
            manaParams: {
                white: false,
                blue: false,
                black: false,
                red: false,
                green: false
            }
        };
    },
    storeDidChange: function () {
        this.setState({
            deck: getDeck(),
            cards: getCards(),
            searchText: this.state.searchText,
            searchOracleText: this.state.searchOracleText,
            searchSubtypeText: this.state.searchSubtypeText,
            manaParams: this.state.manaParams
        });
    },
    handleUserInput: function (searchText) {
        this.setState({
            deck: this.state.deck,
            cards: this.state.cards,
            searchText: searchText,
            searchOracleText: this.state.searchOracleText,
            searchSubtypeText: this.state.searchSubtypeText,
            manaParams: this.state.manaParams
        });
        this.getCards();
    },
    handleOracleUserInput: function (oracleSearchText) {
        this.setState({
            deck: this.state.deck,
            cards: this.state.cards,
            searchText: this.state.searchText,
            searchOracleText: oracleSearchText,
            searchSubtypeText: this.state.searchSubtypeText,
            manaParams: this.state.manaParams
        });
        this.getCards();
    },
    handleSubtypeUserInput: function (subtypeSearchText) {
        this.setState({
            deck: this.state.deck,
            cards: this.state.cards,
            searchText: this.state.searchText,
            searchOracleText: this.state.searchOracleText,
            searchSubtypeText: subtypeSearchText,
            manaParams: this.state.manaParams
        });
        this.getCards();
    },
    handleManaParamsInput(manaParams){
        this.setState({
            deck: this.state.deck,
            cards: this.state.cards,
            searchText: this.state.searchText,
            searchOracleText: this.state.searchOracleText,
            searchSubtypeText: this.state.searchSubtypeText,
            manaParams: manaParams
        });
        this.getCards();
    },
    getCards: function () {
        CardsActions.updateCards(this.state.searchText, this.state.searchOracleText, this.state.searchSubtypeText, this.state.manaParams);
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
                <SearchBar deck={this.state.deck} searchText={this.state.searchText}
                           searchOracleText={this.state.searchOracleText}
                           searchSubtypeText={this.state.searchSubtypeText}
                           handleInputCallback={this.handleUserInput}
                           handleOracleInputCallback={this.handleOracleUserInput}
                           handleSubtypeInputCallback={this.handleSubtypeUserInput} manaParams={this.state.manaParams}
                           manaParamsInputCallback={this.handleManaParamsInput}/>
            </div>
        )
    },
    componentWillMount: function () {
        this.getCards = _.debounce(this.getCards, 100);
        this.getCards();
    }
});

React.render(<CardController />, document.body);