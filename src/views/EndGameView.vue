<template>
    <div id="end">
        <p v-if="winner !== null">Le gagnant est {{ winner.name }} avec {{ winner.score }} points !</p>
        <p v-else>Egalité !</p>
        <Form :submitAction="restartGame" />
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import Form from '@/components/form/Form';

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
    },
    components: { Form }
}
</script>

<style>
p {
    margin-bottom: 1.2rem;
}
</style>