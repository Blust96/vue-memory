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
        }
    },
    methods: {
        ...mapActions('game', [
            'toggleCardFlip',
            'endRound',
        ]),

        flipCard(index) {
            if (!this.cards[index].flipped) {
                this.toggleCardFlip(index);
                this.flippedCards.push({ index, ...this.cards[index] });
            }
            if (this.flippedCards.length === 2) {
                this.endRound(this.flippedCards);
                this.flippedCards = [];
            }
        },
    },
    props: {
        cards: Array[Object],
    },
    components: { BoardCardsItem }
}
</script>