<template>
    <div id="app">
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
    color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
    transition: all .5s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(-2em);
}
</style>