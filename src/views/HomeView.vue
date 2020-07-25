<template>
    <div id="home">
        <h1>Memory Game</h1>
        <form v-on:submit.prevent="startGame">
            <div v-for="(player, index) in players" :key="player.id"> 
                <Label :value="'Joueur ' + (index + 1) + '*'" :for="'joueur-' + (index + 1)" />
                <Input :id="'joueur-' + (index + 1)" type="text" v-on:updateInput="setPlayerName" :playerIndex="index" :minlength="4" required />
            </div>
            <button type="submit">Create game</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import Label from '@/components/form/Label';
import Input from '@/components/form/Input';

export default {
    data() {
        return {
            players: [
                {
                    id: 0,
                    score: 0,
                    name: '',
                },
                {
                    id: 1,
                    score: 0,
                    name: '',
                }
            ],
        }
    },
    methods: {
        ...mapActions('game', [
            'createGame',
        ]),

        setPlayerName(index, value) {
            this.players[index].name = value;
        },

        async startGame() {
            await this.createGame(this.players);
            this.$router.push('game');
        },
    },
    components: { Label, Input }
}
</script>

<style>

</style>
