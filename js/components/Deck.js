var Deck = React.createClass({
    render: function () {
        return (
            <div className="deck">
                <span><h1>Deck</h1></span>
                <Cards cards={this.props.cards} cardClickedCallback={this.props.cardClickedCallback}/>
            </div>
        )
    }
});