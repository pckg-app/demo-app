<template>
    <div>

        <loader-indicator></loader-indicator>

        <header class="s-header-main text-center">

            <router-link to="/">
                <img src="/static/logo.png" class="__logo-main"/>
            </router-link>

            <nav class="s-navigation-main">
                <ul class="flex-row --center">
                    <li class="__menu-item-holder" v-if="!$root.isLoggedIn">
                        <router-link to="/" href="#">Homepage</router-link>
                    </li>
                    <li class="__menu-item-holder" v-if="$root.isLoggedIn">
                        <router-link to="/profile" href="#">My profile</router-link>
                    </li>
                    <li class="__menu-item-holder" v-if="!$root.isLoggedIn">
                        <router-link to="/contact" href="#">Contact</router-link>
                    </li>
                </ul>
            </nav>

        </header>

        <main class="s-content text-center">
            <keep-alive>
                <router-view :class="$root.containerClass"></router-view>
            </keep-alive>
        </main>

        <footer class="display-block text-center padding-sm">
            <p class="text-center font-size-xxs color-grayish margin-bottom-sm">
                2021 &copy; <a href="https://pckg.org" target="_blank" title="Pckg framework">Pckg.org</a>
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    computed: {
        isAdmin: function () {
            return true;
        },
        user: function () {
            return this.$root.user;
        }
    }
}
</script>
