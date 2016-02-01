var SearchBar = React.createClass({
    render: function () {
        return (
            <div className="searchBar">
                Card name: <SearchField searchText={this.props.searchText}
                                        onUserInput={this.props.handleInputCallback}/>
                Oracle rules: <SearchField searchText={this.props.searchOracleText}
                                           onUserInput={this.props.handleOracleInputCallback}/>
                Subtype(exact search): <SearchField searchText={this.props.searchSubtypeText}
                                                    onUserInput={this.props.handleSubtypeInputCallback}/>
                <ManaColorSelector manaParams={this.props.manaParams} manaParamsInputCallback={this.props.manaParamsInputCallback}/>
                Cards: {DeckUtils.getCardCount(this.props.deck)} / 60
                <ExportButton deck={this.props.deck}/>
            </div>
        )
    }
});