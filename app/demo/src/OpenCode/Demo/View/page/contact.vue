<template>
    <div>
        <h1>Contact</h1>
        <p>Hey, this is contact page!</p>
        <button class="btn --primary" @click.prevent="sayHello">Say hello!</button>
        <p v-if="message" class="italic">{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
        };
    },
    methods: {
        sayHello() {
            http.post('/api', {}, ({message}) => {
                this.message = message;
            })
        }
    }
}
</script>
