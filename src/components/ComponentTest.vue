<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    display: flex
}
</style>

<script>
export default {
    name: 'ComponentTest',
    methods: {
        direCoucou(){
            console.log('coucou');
        },
        envoyerCoucou() {
            this.$emit('evenement-perso', { message: 'coucou envoyé'})
        }
    }
}
</script>