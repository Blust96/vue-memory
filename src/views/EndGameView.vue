<template>
    <div id="end">
        <h1>Memory Game</h1>
        <p v-if="winner !== null">Le gagnant est {{ winner.name }} avec {{ winner.score }} points !</p>
        <p v-else>Egalité !</p>
        <button @click="restartGame">
            Recommencer
        </button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    computed: {
        ...mapState('game', 
        [
            'winner',
            'players'
        ]),
    },
    methods: {
        ...mapActions('game', [
            'resetGame',
            'createGame',
        ]),

        async restartGame() {
            this.resetGame();
            await this.createGame(this.players);
            this.$router.push('game');
        },
    }
}
</script>
