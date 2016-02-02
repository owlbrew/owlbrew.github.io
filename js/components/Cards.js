var Cards = React.createClass({
    render: function () {
        var cardClickedCallback = this.props.cardClickedCallback;
        return (
            <div className={this.props.className} scrollTop={this.props.scroll}>
                <ul className="cards">
                    {
                        this.props.cards.map(function (card) {
                            return (<li key={card.id}>
                                <Card card={card} cardClickedCallback={cardClickedCallback}/>
                            </li>);
                        })}
                </ul>
            </div>
        );
    }
});