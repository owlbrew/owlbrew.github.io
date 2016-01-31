var SearchResults = React.createClass({
    render: function () {
        return (
            <div className="searchResults">
                <Cards cards={this.props.cards} cardClickedCallback={this.props.cardClickedCallback}/>
            </div>
        )
    }
});