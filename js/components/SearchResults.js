var SearchResults = React.createClass({
    render: function () {
        return (
            <div className="searchResults">
                <span><h1>Search</h1></span>
                <Cards cards={this.props.cards} cardClickedCallback={this.props.cardClickedCallback}/>
            </div>
        )
    }
});