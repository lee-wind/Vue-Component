<template>
    <div class="plugins">
        <button @click="alert">alert</button>
        <button @click="modal">modal</button>
        <button @click="confirm">confirm</button>
        <Button></Button>
    </div>
</template>

<script>
    import Button from './Button'
    export default {
        name: "Plugin",
        components: {
            Button
        },
        methods: {
            alert(){
                this.$alert('你是美少女战士')
            },
            modal(){
                this.$modal({
                    bodyContent: Button
                });
            },
            confirm(){
                this.$confirm('确认变成美少女？')
                    .then(() => {
                        console.log("确认");
                    })
                    .catch(() => {
                        console.log("取消确认");
                    })
            }
        },
    }
</script>

<style scoped>

</style>
