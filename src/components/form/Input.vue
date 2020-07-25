<template>
    <input v-model="value" v-on:change="emitValue"/>
</template>

<script>
export default {
    data() {
        return {
            value: '',
        }
    },
    props: {
        playerIndex: Number,
    },
    methods: {
        emitValue() {
            this.$emit('updateInput', this.playerIndex, this.value);
        },
    },
}
</script>