<template>
    <form v-on:submit.prevent="submitAction">
        <div class="input-container">
            <div class="text-input" v-for="(player, index) in players" :key="player.id"> 
                <Input :id="'joueur-' + (index + 1)" type="text" v-on:updateInput="setPlayerName" :playerIndex="index" :playerName="player.name" :minlength="4" required />
                <Label :value="'Joueur ' + (index + 1) + '*'" :for="'joueur-' + (index + 1)" />
            </div>
        </div>
        <div class="input-container">
            <div id="select-wrapper">
                <Select v-on:updateSelect="setCardsNumber" :cardsNumber="cardsNumber" />
            </div>
            <button type="submit">Play !</button>
        </div>
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
form {
    width: 320px;
    margin: 0 auto;
}

.input-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.text-input {
    position: relative;
}

input, select, button[type="submit"] {
    width: 150px;
    font-size: 1rem;
}

input {
    color: white;
    padding: 1.5rem 0 0.5rem 8px;
    border: 1px solid var(--primary-color);
}

label {
    position: absolute;
    top: 6px;
	left: 8px;
    transition: all 0.2s ease-in-out;
}

input:focus~label {
    font-size: 0.8em;
    font-weight: bold;
    top: 5px;
}

select, button[type="submit"] {
    color: var(--secondary-color);
    margin-top: 0.5rem;
    padding: 0.3rem 0;
    font-weight: bold;
    border: none;
    background-color: var(--primary-color);
}

select {
    -webkit-appearance: none;
}

#select-wrapper {
    position: relative;
}

#select-wrapper:after {
    content: '▼';
    position: absolute;
    color: white;
    top: 14px;
    right: 6px;
}
</style>