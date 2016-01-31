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
    var sets = ['KTK', 'FRF', 'DTK', 'ORI', 'BFZ', 'OGW'];
    var setParam = '';
    for (var i= 0;i<sets.length;i++) {
        setParam = setParam + '&set=' + sets[i];
    }
    xmlHttp.open("GET", "https://api.deckbrew.com/mtg/cards?name=" + searchText + setParam, false); // false for synchronous request
    xmlHttp.send(null);
}

function addCardToDeck(cardToAdd) {
    // Check to see if we can find the card in the deck already and then increment id
    for (var i = 0; i < _deck.cards.length; i++) {
        var card = _deck.cards[i];
        if (card.id === cardToAdd.id) {
            card.ammount++;
            return;
        }
    }
    //If we can't then we set ammount of card to one and add it to deck
    //But first we need to copy object by value so as to not add the reference to the original card
    cardToAdd = JSON.parse(JSON.stringify(cardToAdd));
    if (cardToAdd.ammount == null) cardToAdd.ammount = 1;
    _deck.cards.push(cardToAdd);
}

function removeCardFromDeck(cardToRemove) {
    for (var i = 0; i < _deck.cards.length; i++) {
        var card = _deck.cards[i];
        if (card.id === cardToRemove.id) {
            if (card.ammount > 1) {
                card.ammount--;
            } else if (card.ammount == 1) {
                _deck.cards.splice(i, 1)
            }
        }
    }
}

var CardStore = Flux.createStore({
    getCards: function () {
        return _cards;
    },
    getDeck: function () {
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
    if (payload.actionType === "REMOVE_CARD_FROM_DECK") {
        removeCardFromDeck(payload.card);
        CardStore.emitChange();
    }
});