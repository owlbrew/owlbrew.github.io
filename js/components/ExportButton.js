var ExportButton = React.createClass({
    render: function () {
        var deck = this.props.deck;
        var downloadAsTextFile = function (text) {
            var data = new Blob([text], {type: 'text/plain'});
            var url = (window.webkitURL || window.URL).createObjectURL(data);
            //TODO check if element already exists and replace it
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = 'mydeck.txt';
            a.click();
        };
        var getDeckAsText = function(deck) {
            var output = '';
            for (var i =0;i<deck.cards.length;i++) {
                var card = deck.cards[i];
                output = output.concat('\r\n' + card.ammount + ' ' + card.name)
            }
            return output;
        };
        var handleButtonClicked = function () {
            downloadAsTextFile(getDeckAsText(deck));
        };
        return (
            <button onClick={handleButtonClicked}>Export Deck</button>
        )
    }
});