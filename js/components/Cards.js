var Cards = React.createClass({
    render: function () {
        return (
            <div className={this.props.className}>
                <ul className="cards">
                    { this.props.cards.map(function (card) {
                        return <li key={card.id}>
                            <Card data={card}/>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
});