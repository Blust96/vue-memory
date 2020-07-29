<template>
    <div id="app">
        <h1>MEMORY GAME</h1>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--primary-color);
}

h1 {
    margin: 1rem 0;
}

.fade-enter-active, .fade-leave-active {
    transition: all .5s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(-2em);
}
</style>