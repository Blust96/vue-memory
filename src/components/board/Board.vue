<template>
    <div id="game-board">
        <div id="game-board-players">
            <BoardPlayer v-for="player in players" :key="player.id" :player="player" />
            Au tour de : {{ players[currentPlayer].name }}
            <BoardCards :cards="cards" />
        </div>
    </div>
</template>

<script>
import BoardPlayer from '@/components/board/BoardPlayer';
import BoardCards from '@/components/board/BoardCards';

export default {
    props: {
        cards: Array[Object],
        players: Array[Object],
        currentPlayer: Number,
    },
    components: { BoardPlayer, BoardCards }
}
</script>