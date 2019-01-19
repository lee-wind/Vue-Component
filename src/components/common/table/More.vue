<template>
    <span class="more float-right" @click="showMore">更多</span>
</template>

<script>
    export default {
        name: "More",
        props: [
            'title',
            'text'
        ],
        methods: {
            showMore(){
               this.$message('美少女战士巴拉拉小魔仙美少女战士巴拉拉小魔仙', this.text);
            }
        }
    }
</script>

<style scoped lang="scss">
    .more{
        color: dodgerblue;
        cursor: pointer;
    }
</style>
