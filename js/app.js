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
            <div className="app">
                <Cards cards={this.state.cards}/>
                <SearchBar searchText={this.state.searchText} handleInputCallback={this.handleUserInput}/>
            </div>
        )
    },
    componentWillMount: function() {
        this.getCards = _.debounce(this.getCards, 100);
    }
});

React.render(<CardController />, document.body);