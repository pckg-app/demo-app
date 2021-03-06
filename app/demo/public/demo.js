import PageHomepage from '../src/OpenCode/Demo/View/page/homepage.vue';
import PageContact from '../src/OpenCode/Demo/View/page/contact.vue';
import PageClients from '../src/OpenCode/Demo/View/page/clients.vue';

import LayoutFrontend from '../src/OpenCode/Demo/View/layout/frontend.vue';
import PckgAuthAdvanced from '../../../vendor/pckg/auth/src/Pckg/Auth/View/advanced.vue';
import PckgAuthFull from '../../../vendor/pckg/auth/src/Pckg/Auth/View/basic.vue';

export default {
    install(Vue) {
        // pages
        Vue.component('page-homepage', PageHomepage);
        Vue.component('page-contact', PageContact);
        Vue.component('page-clients', PageClients);
        //Vue.component('page-projects', () => import('../src/OpenCode/Demo/View/page/projects.vue'));

        // layouts
        Vue.component('layout-frontend', LayoutFrontend);

        // auth components
        Vue.component('pckg-auth-advanced', PckgAuthAdvanced);
        Vue.component('pckg-auth-full', PckgAuthFull);
    }
}
