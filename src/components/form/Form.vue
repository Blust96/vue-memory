<template>
    <form v-on:submit.prevent="submitAction">
        <div v-for="(player, index) in players" :key="player.id"> 
            <Label :value="'Joueur ' + (index + 1) + '*'" :for="'joueur-' + (index + 1)" />
            <Input :id="'joueur-' + (index + 1)" type="text" v-on:updateInput="setPlayerName" :playerIndex="index" :playerName="player.name" :minlength="4" required />
        </div>
        <Select v-on:updateSelect="setCardsNumber" :cardsNumber="cardsNumber" />
        <button type="submit">Play !</button>
    </form>
</template>

<script>
import { mapState } from 'vuex';

import Label from '@/components/form/Label';
import Input from '@/components/form/Input';
import Select from '@/components/form/Select';

export default {
    props: {
        submitAction: Function,
    },
    computed: {
        ...mapState('game', 
        [
            'players',
            'cardsNumber',
        ]),
    },
    methods: {
        setPlayerName(index, value) {
            this.$store.commit('game/setPlayerName', { index, name: value });
        },

        setCardsNumber(value) {
            this.$store.commit('game/setCardsNumber', { cardsNumber: value });
        },
    },
    components: { Label, Input, Select }
}
</script>

<style>

</style>