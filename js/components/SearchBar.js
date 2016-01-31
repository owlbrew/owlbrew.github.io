var SearchBar = React.createClass({
    render: function () {
        return (
            <div className="searchBar">
                Card name: <SearchField searchText={this.props.searchText}
                                        onUserInput={this.props.handleInputCallback}/>
                Oracle rules: <SearchField searchText={this.props.searchOracleText}
                                           onUserInput={this.props.handleOracleInputCallback}/>
                Subtype(exact search): <SearchField searchText={this.props.searchCardTypeText}
                                           onUserInput={this.props.handleCardTypeInputCallback}/>
            </div>
        )
    }
});