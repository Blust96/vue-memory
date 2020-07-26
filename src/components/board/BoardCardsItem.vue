<template>
    <div @click="flipCard" v-bind:class="{ 'game-board-card-flipped': card.flipped }" class="game-board-card" ref="game-card">
        <div class="game-board-card-inner">
            <div class="game-board-card-front"></div>
            <div class="game-board-card-back">
                <img :src="card.src"/>
            </div>
        </div>
    </div>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';

export default {
    props: {
        card: Object,
        flipCard: Function,
    },
    mounted() {
        VanillaTilt.init(this.$refs['game-card'], {
            reverse: true,
            transition: true,
        });
    }
}
</script>

<style>
    .game-board-card {
        background-color: transparent;
        margin: 1.2rem;
        width: calc(25% - (3 * 1.2rem));
        height: 200px;
        perspective: 1000px;
    }

    .game-board-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .game-board-card-flipped .game-board-card-inner {
        transform: rotateY(180deg);
    }

    .game-board-card-front, .game-board-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 8px;
        overflow: hidden;
    }

    .game-board-card-front {
        background-color: #bbb;
        color: black;
    }

    .game-board-card-back {
        transform: rotateY(180deg);
    }

    .game-board-card img {
        width: 300px;
        height: 200px;
        border-radius: 8px;
    }
</style>