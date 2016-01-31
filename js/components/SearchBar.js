var SearchBar = React.createClass({
    render: function () {
        var getCardCount = function (deck) {
            var count = 0;
            for (var i = 0; i < deck.cards.length; i++) {
                count += deck.cards[i].ammount;
            }
            return count;
        };
        return (
            <div className="searchBar">
                Card name: <SearchField searchText={this.props.searchText}
                                        onUserInput={this.props.handleInputCallback}/>
                Oracle rules: <SearchField searchText={this.props.searchOracleText}
                                           onUserInput={this.props.handleOracleInputCallback}/>
                Subtype(exact search): <SearchField searchText={this.props.searchSubtypeText}
                                                    onUserInput={this.props.handleSubtypeInputCallback}/>
                Cards: {getCardCount(this.props.deck)} / 60
                <ExportButton deck={this.props.deck}/>
            </div>
        )
    }
});