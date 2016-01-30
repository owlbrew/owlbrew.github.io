var Card = React.createClass({
    render: function () {
        var card = this.props.card;
        var callback = this.props.cardClickedCallback;
        var cardClicked = function() {
            callback(card);
        };
        return (
            <div className="card" onClick={cardClicked}>
                <img src={this.props.card.editions[0].image_url}/>
                {this.props.card.ammount}
            </div>
        );
    }
});