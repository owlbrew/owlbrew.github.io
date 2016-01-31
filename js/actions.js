/** Actions */

var CardsActions = Flux.createActions({
    updateCards: function (searchText, searchCardTypeText) {
        return {
            actionType: "UPDATE_CARDS",
            searchText: searchText,
            searchCardTypeText: searchCardTypeText
        }
    },
    addCardToDeck: function(card) {
        return {
            actionType: "ADD_CARD_TO_DECK",
            card: card
        }
    },
    removeCardfromDeck: function(card) {
        return {
            actionType: "REMOVE_CARD_FROM_DECK",
            card: card
        }
    }
});

var getCards = function () {
    return CardStore.getCards();
}

var getDeck = function(){
    return CardStore.getDeck();
}
