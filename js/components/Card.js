var Card = React.createClass({
    render: function () {
        var card = this.props.card;
        var callback = this.props.cardClickedCallback;
        var cardClicked = function () {
            callback(card);
        };
        var cardImages = [];
        if (card.ammount == null) card.ammount = 1;
        for (var i = 0; i < card.ammount; i++) {
            var offsetFromTop = ((30*i) + 'px')
            var style = {
                position: 'absolute',
                top: offsetFromTop,
            };
            var cardImage = <img src={card.img_url} style={style}/>;
            cardImages.push(cardImage);
        }
        return (
            <div className="card" onClick={cardClicked}>
                {cardImages}
            </div>
        );
    }
});