import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from '@/views/HomeView';
import GameView from '@/views/GameView';
import EndGameView from '@/views/EndGameView';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/game',
        name: 'Game',
        component: GameView
    },
    {
        path: '/end',
        name: 'End',
        component: EndGameView
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
