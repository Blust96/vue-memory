<template>
    <div id="game-board-cards">
        <BoardCardsItem v-for="(card, index) in cards" :key="index" :card="card" :flipCard="() => flipCard(index)"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import BoardCardsItem from '@/components/board/BoardCardsItem';

export default {
    data() {
        return {
            flippedCards: [],
            checkingCards: false,
        }
    },
    methods: {
        ...mapActions('game', [
            'toggleCardFlip',
            'endRound',
        ]),

        flipCard(index) {
            if (!this.checkingCards) {
                if (!this.cards[index].flipped) {
                    this.toggleCardFlip(index);
                    this.flippedCards.push({ index, ...this.cards[index] });
                }

                if (this.flippedCards.length === 2) {
                    this.checkingCards = true;
                    setTimeout(() => {
                        this.endRound(this.flippedCards);
                        this.flippedCards = [];
                        this.checkingCards = false;
                    }, 1000);
                }
            }
        },
    },
    props: {
        cards: Array[Object],
    },
    components: { BoardCardsItem }
}
</script>

<style>
    #game-board-cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
    }
</style>