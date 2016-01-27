var Cards = React.createClass({
    render: function () {
        return (
            <div className="mtg_app">
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