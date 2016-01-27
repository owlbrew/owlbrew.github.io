/** Actions */

var CardsActions = Flux.createActions({
    updateCards: function (searchText) {
        return {
            actionType: "UPDATE_CARDS",
            searchText: searchText
        }
    },
    addCardToDeck: function(card) {
        return {
            actionType: "ADD_CARD_TO_DECK",
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
