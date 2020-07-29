<template>
    <input v-model="value"/>
</template>

<script>
export default {
    props: {
        playerIndex: Number,
        playerName: String,
    },
    computed: {
        value: {
            get() {
                return this.playerName;
            },
            set(newValue) {
                this.$emit('updateInput', this.playerIndex, newValue);
            }
        }
    }
}
</script>

<style>
input {
    position: relative;
}
</style>