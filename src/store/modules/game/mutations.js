export default {
    resetGameState(state) {
        state.players = state.players.map(player => {
            player.score = 0;
            return player;
        });
        state.winner = {};
    },

    setPlayers(state, { players }) {
        state.players = players;
    },

    setPlayerName(state, { index, name }) {
        state.players[index].name = name;
    },

    setCurrentPlayer(state, { currentPlayer }) {
        state.currentPlayer = currentPlayer;
    },

    increasePlayerScore(state) {
        state.players[state.currentPlayer].score += 1;
    },

    setWinner(state, { winner }) {
        state.winner = winner;
    },

    setCardsNumber(state, { cardsNumber }) {
        state.cardsNumber = cardsNumber;
    },

    setCards(state, { randomCards }) {
        state.cards = randomCards;
    },

    setCardFlip(state, { cardIndex })
    {
        state.cards[cardIndex].flipped = !state.cards[cardIndex].flipped;
    },
}