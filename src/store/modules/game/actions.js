import router from '@/router';
import { getRandomImagesList } from '@/api/picsum';

export default {
    async createCards({ state, commit }) {
        try {
            const imagesListSize = state.cardsNumber / 2;
            let cardsImages = await getRandomImagesList(imagesListSize);
            let randomCards = [];
            
            for (let i = 0 ; i < state.cardsNumber ; i++) {
                let randomImageIndex = Math.floor(Math.random() * cardsImages.length);
                let card = {
                    id: cardsImages[randomImageIndex].id,
                    src: cardsImages[randomImageIndex].download_url,
                    flipped: false,
                }

                if (randomCards.filter(cardItem => cardItem.id === card.id).length > 0) {
                    cardsImages = cardsImages.filter(cardItem => cardItem.id !== card.id);
                }

                randomCards.push(card);
            }

            commit('setCards', { randomCards });
        } catch (error) {
            console.log(error);
        }
    },

    async createGame({ commit, dispatch }, players) {
        await dispatch('createCards');
        commit('setPlayers', { players });

        let currentPlayer = Math.round(Math.random());
        commit('setCurrentPlayer', { currentPlayer });
    },

    resetGame({ commit }) {
        commit('resetGameState');
    },

    toggleCardFlip({ commit }, cardIndex) {
        commit('setCardFlip', { cardIndex });
    },

    incrementPlayerScore({ dispatch, state, commit }) {
        commit('increasePlayerScore');

        const totalScore = state.players.reduce((a, b) => a.score + b.score);
        if (totalScore === state.cardsNumber / 2) {
            dispatch('endGame',
                    state.players[0].score === state.players[1].score
                    ? null
                    : state.players[0].score > state.players[1].score
                    ? state.players[0]
                    : state.players[1]
            );
        }
    },

    endRound({ dispatch, state, commit }, flippedCards) {
        if (flippedCards[0].id === flippedCards[1].id) {
            dispatch('incrementPlayerScore');
        } else {
            for (let i = 0 ; i < flippedCards.length ; i++) {
                commit('setCardFlip', { cardIndex: flippedCards[i].index });
            }
        }
        commit('setCurrentPlayer', { currentPlayer: - (state.currentPlayer - 1)  });
    },

    endGame({ commit }, winner) {
        commit('setWinner', { winner });
        router.push('/end');
    },
}