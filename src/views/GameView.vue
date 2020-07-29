<template>
    <div id="game">
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