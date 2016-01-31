var Deck = React.createClass({
    render: function () {
        console.log(this.props.cards)
        return (
            <div className="deck">
                <span><h1>Deck</h1></span>
                <Cards cards={this.props.cards} cardClickedCallback={this.props.cardClickedCallback}/>
            </div>
        )
    }
});