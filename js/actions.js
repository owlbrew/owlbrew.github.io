/** Actions */

var CardsActions = Flux.createActions({
    updateCards: function (searchText) {
        return {
            actionType: "UPDATE_CARDS",
            searchText: searchText
        }
    }
});

var getCards = function () {
    return CardStore.getCards();
}
