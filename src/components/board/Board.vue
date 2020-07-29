<template>
    <div id="game-board">
        <div id="game-board-players">
            <BoardPlayer :key="players[0].id" :player="players[0]" />
            Au tour de : {{ players[currentPlayer].name }}
            <BoardPlayer :key="players[1].id" :player="players[1]" />
        </div>
        <BoardCards :cards="cards" />
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

<style>
#game-board {
    width: 80%;
    margin: 0 auto;
}

#game-board-players {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    margin: 0 auto;
}
</style>