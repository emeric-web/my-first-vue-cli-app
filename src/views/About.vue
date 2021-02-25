<template>
    <div class="about">
        <h1>This is an about page.</h1>
        <p>{{ formattedDate }}</p>
        <BaseButton @click="sayHello">
            Hello
        </BaseButton>
        <BaseButton @click="sayCoucou">
            Coucou
        </BaseButton>
        <BaseButton @click="incrementMonth">
            +++
        </BaseButton>
    </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'About',
    components: {
        BaseButton
    },
    computed: {
        ...mapGetters(['formattedDate']),
    },
    methods: {
        sayHello() {
            console.log("Hello");
        },
        sayCoucou() {
            console.log("Coucou");
        },
        ...mapActions(['incrementMonth'])
    }
}
</script>