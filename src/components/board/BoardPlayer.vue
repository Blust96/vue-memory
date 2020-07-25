<template>
    <p class="game-board-player">
        {{ player.name }}: {{ player.score }}pts
    </p>
</template>

<script>
export default {
    props: {
        player: Object,
    },
}
</script>