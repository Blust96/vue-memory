<template>
    <p class="game-board-player">
        {{ player.name }} : {{ player.score }}pt{{ player.score > 1 ? 's' : '' }}
    </p>
</template>

<script>
export default {
    props: {
        player: Object,
    },
}
</script>