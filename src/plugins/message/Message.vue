<template>
    <MyMask>
        <Header :title="title"></Header>
        <div class="body">
            <p class="message">
                {{message}}
            </p>
        </div>
    </MyMask>
</template>

<script>
    import Header from '../components/Header'
    export default {
        name: "Message",
        props: [
            'title',
            'message'
        ],
        components: {
            Header
        }
    }
</script>

<style lang="scss">
    .my-mask {
        .container{
            width: 550px!important;
            .body{
                height: 280px!important;
            }
            .message{
                height: 100%;
                overflow: auto;
            }
        }
    }
</style>
