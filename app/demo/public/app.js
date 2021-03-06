import {PckgApp} from "../../../vendor/pckg/helpers-js/webpack/app.full.js";
import Demo from "./demo";
import store from "./store.js";

(new PckgApp()).dev()
    .store(store)
    .use(Demo)
    .register({
        computed: {
            routeMetaTags() {
                if (!this.$route || !this.$route.meta || !this.$route.meta.tags) {
                    return {};
                }

                return this.$route.meta.tags;
            },
            containerClass: function () {
                if (!this.routeMetaTags.container) {
                    return null;
                }

                return 'container ' + this.routeMetaTags.container;
            },
            layoutComponent: function () {
                if (Object.keys(this.routeMetaTags).length === 0) {
                    return 'layout-frontend';
                }

                if (this.routeMetaTags['layout:pb-route-layout']) {
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
