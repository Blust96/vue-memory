<template>
    <select v-model="selected">
        <option>8</option>
        <option>12</option>
        <option>16</option>
    </select>
</template>

<script>
export default {
    props: {
        cardsNumber: Number,
    },
    computed: {
        selected: {
            get() {
                return this.cardsNumber;
            },
            set(newValue) {
                this.$emit('updateSelect', parseInt(newValue));
            }
        }
    },
}
</script>

<style>

</style>