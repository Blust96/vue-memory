<template>
    <div id="home">
        <h1>Memory Game</h1>
        <form v-on:submit.prevent="startGame">
            <div v-for="(player, index) in players" :key="player.id"> 
                <Label :value="'Joueur ' + (index + 1) + '*'" :for="'joueur-' + (index + 1)" />
                <Input :id="'joueur-' + (index + 1)" type="text" v-on:updateInput="setPlayerName" :playerIndex="index" :minlength="4" required />
            </div>
            <Select v-on:updateSelect="setCardsNumber" :cardsNumber="cardsNumber" />
            <button type="submit">Create game</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import Label from '@/components/form/Label';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';

export default {
    computed: {
        ...mapState('game', 
        [
            'players',
            'cardsNumber',
        ]),
    },
    methods: {
        ...mapActions('game', [
            'createGame',
        ]),

        setPlayerName(index, value) {
            this.$store.commit('game/setPlayerName', { index, name: value });
        },

        setCardsNumber(value) {
            this.$store.commit('game/setCardsNumber', { cardsNumber: value });
        },

        async startGame() {
            await this.createGame(this.players);
            this.$router.push('game');
        },
    },
    components: { Label, Input, Select }
}
</script>

<style>

</style>
