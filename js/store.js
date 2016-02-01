/** McFly */

var Flux = new McFly();

/** Store */
_cards = [];
_deck = {
    cards: []
};
function updateCards(searchText, searchOracleText, searchSubtypeText, manaParams) {
    var xmlHttp = new XMLHttpRequest();
    var sets = ['KTK', 'FRF', 'DTK', 'ORI', 'BFZ', 'OGW'];
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            _cards = JSON.parse(xmlHttp.responseText);
            _cards = setCardImageUrlsBasedOnEdition(_cards, sets);
        }
    };
    var requestUrlParams = buildQueryParams(searchText, searchOracleText, searchSubtypeText, manaParams);
    xmlHttp.open("GET", "https://api.deckbrew.com/mtg/cards?" + requestUrlParams, false); // false for synchronous request
    xmlHttp.send(null);
}

function buildQueryParams(searchText, searchOracleText, searchSubtypeText, manaParams) {
    //Set query params
    var setQuery = '';
    for (var i = 0; i < sets.length; i++) {
        setQuery = setQuery + '&set=' + sets[i];
    }
    //Subtype query params
    var subtypeQuery = '';
    if (searchSubtypeText != null && searchSubtypeText != '') {
        subtypeQuery = '&subtype=' + searchSubtypeText
    }
    //Mana colors query params
    var manaQuery = '';
    if (manaParams.white || manaParams.blue || manaParams.black || manaParams.red || manaParams.green) {
        var numberOfColors = 0;
        if (manaParams.white) {
            manaQuery = manaQuery.concat('&color=white');
            numberOfColors++;
        }
        if (manaParams.blue) {
            manaQuery = manaQuery.concat('&color=blue');
            numberOfColors++;
        }
        if (manaParams.black) {
            manaQuery = manaQuery.concat('&color=black');
            numberOfColors++;
        }
        if (manaParams.red) {
            manaQuery = manaQuery.concat('&color=red');
            numberOfColors++;
        }
        if (manaParams.green) {
            manaQuery = manaQuery.concat('&color=green');
            numberOfColors++;
        }
        //if (numberOfColors > 1) {
        //    manaQuery = manaQuery.concat('&multicolor=true');
        //}
    }
    if (searchOracleText == null) searchOracleText = '';
    var requestUrlParams = "name=" + searchText + "&oracle=" + searchOracleText + setQuery + subtypeQuery + manaQuery;
    return requestUrlParams;
}

function setCardImageUrlsBasedOnEdition(cards, sets) {
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        for (var j = 0; j < sets.length; j++) {
            for (var k = 0; k < card.editions.length; k++) {
                if (card.editions[k].set_url.indexOf(sets[j]) > -1) {
                    card.img_url = card.editions[k].image_url;
                    break;
                }
            }
            cards[i] = card;
        }
    }
    return cards;
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
        updateCards(payload.searchText, payload.searchOracleText, payload.searchSubtypeText, payload.manaParams);
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