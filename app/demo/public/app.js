import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VeeValidate from "vee-validate/dist/vee-validate.min";
import PckgHelpersJs from "../../../vendor/pckg/helpers-js/webpack/setup.vue.js";

Vue.config.debug = true;
Vue.config.silent = false;
Vue.config.devtools = true;
Vue.config.performance = true;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(PckgHelpersJs);

import router from '../../../vendor/pckg/helpers-js/webpack/router.full.js';

import auth from "./store/auth.js";

// pages
Vue.component('page-homepage', () => import('../src/OpenCode/Demo/View/page/homepage.vue'));
Vue.component('page-contact', () => import('../src/OpenCode/Demo/View/page/contact.vue'));

// layouts
Vue.component('layout-frontend', () => import('../src/OpenCode/Demo/View/layout/frontend.vue'));

// auth components
Vue.component('pckg-auth-advanced', () => import('../../../vendor/pckg/auth/src/Pckg/Auth/View/advanced.vue'));
Vue.component('pckg-auth-full', () => import('../../../vendor/pckg/auth/src/Pckg/Auth/View/basic.vue'));

window.$dispatcher = new Vue();
window.$store = new Vuex.Store({
    modules: {
        auth
    }
});

window.Vue = Vue;
window.$vue = new Vue({
    el: '#vue-app',
    router: router,
    store: $store,
    computed: {
        containerClass: function () {
            if (!this.$route.meta || !this.$route.meta.tags || !this.$route.meta.tags.container) {
                return null;
            }

            return 'container ' + this.$route.meta.tags.container;
        },
        layoutComponent: function () {
            if (!this.$route.meta || Object.keys(this.$route.meta).length === 0) {
                return 'layout-frontend';
            }

            if (this.$route.meta.tags['layout:pb-route-layout']) {
                return 'pb-route-layout';
            }

            return 'layout-frontend';
        },
        isLoggedIn: function () {
            return this.$store.getters['auth/isLoggedIn'];
        },
        user: function () {
            return this.$store.state.auth.user;
        }
    }
});
