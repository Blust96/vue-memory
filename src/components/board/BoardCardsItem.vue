<template>
    <div class="game-board-card">
        <img :src="card.src" width="200" height="200" @click="flipCard" />
    </div>
</template>

<script>
export default {
    props: {
        card: Object,
        flipCard: Function,
    },
}
</script>