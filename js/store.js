/** McFly */

var Flux = new McFly();

/** Store */
_cards = [];
_deck = {
    cards: []
};
function updateCards(searchText) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            _cards = JSON.parse(xmlHttp.responseText);
        }
    };
    xmlHttp.open("GET", "https://api.deckbrew.com/mtg/cards?name=" + searchText, false); // false for synchronous request
    xmlHttp.send(null);
}

function addCardToDeck(card) {
    _deck.cards.push(card);
}

var CardStore = Flux.createStore({
    getCards: function () {
        return _cards;
    },
    getDeck: function(){
        return _deck;
    }
}, function (payload) {
    if (payload.actionType === "UPDATE_CARDS") {
        updateCards(payload.searchText);
        CardStore.emitChange();
    }
    if (payload.actionType === "ADD_CARD_TO_DECK") {
        addCardToDeck(payload.card);
        CardStore.emitChange();
    }
});