<template>
    <div id="home">
        <Form :submitAction="startGame" />
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import Form from '@/components/form/Form';

export default {
    methods: {
        ...mapActions('game', [
            'createGame',
        ]),

        async startGame() {
            await this.createGame(this.players);
            this.$router.push('game');
        },
    },
    components: { Form }
}
</script>

<style>

</style>
