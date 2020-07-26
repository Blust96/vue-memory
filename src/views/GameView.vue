<template>
    <div id="game">
        <h1>Memory Game</h1>
        <Board :cards="cards" :players="players" :currentPlayer="currentPlayer" />
    </div>
</template>

<script>
import { mapState } from 'vuex';

import Board from '@/components/board/Board';

export default {
    computed: {
        ...mapState('game', 
        [
            'players',
            'cards',
            'currentPlayer'
        ]),
    },
    components: { Board }
}
</script>