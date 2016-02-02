var SearchResults = React.createClass({
    onScroll: function () {
        this.props.onScroll(this.refs.searchResults.getDOMNode().scrollTop);
    },
    render: function () {
        return (
            <div ref="searchResults" className="searchResults"
                 onScroll={this.onScroll}
                 scrollTop={this.props.scroll}>
                <Cards cards={this.props.cards} cardClickedCallback={this.props.cardClickedCallback}/>
            </div>
        )
    },
    componentDidUpdate: function () {
        this.refs.searchResults.getDOMNode().scrollTop = this.props.scroll;
    }
});