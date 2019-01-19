<template>
    <div class="header clearfix">
        <span class="close" @click="close"></span>
        <p class="title text-ellipsis">{{title}}</p>
    </div>
</template>

<script>
    export default {
        name: "Header",
        inject: [
            'close'
        ],
        props: [
            'title'
        ],
    }
</script>

<style scoped>
</style>
