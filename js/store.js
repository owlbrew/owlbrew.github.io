/** McFly */

var Flux = new McFly();

/** Store */
_cards = [];

function updateCards() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            _cards = JSON.parse(xmlHttp.responseText);
        }
    };
    xmlHttp.open("GET", "https://api.deckbrew.com/mtg/cards", false); // false for synchronous request
    xmlHttp.send(null);
}

var CardStore = Flux.createStore({
    getCards: function () {
        return _cards;
    }
}, function (payload) {
    if (payload.actionType === "UPDATE_CARDS") {
        updateCards();
        CardStore.emitChange();
    }
});