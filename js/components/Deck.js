var Deck = React.createClass({
    render: function () {
        console.log(this.props.cards)
        return (
            <div className="deck">
                <Cards cards={this.props.cards} cardClickedCallback={this.props.cardClickedCallback}/>
            </div>
        )
    }
});