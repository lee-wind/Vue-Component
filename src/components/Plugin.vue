<template>
    <div class="plugins">
        <button @click="alert">alert</button>
        <button @click="modal">modal</button>
        <button @click="confirm">confirm</button>
        <!--<Button></Button>-->
    </div>
</template>

<script>
    import ModalBody from './ModalBody'
    export default {
        name: "Plugin",
        components: {
            ModalBody
        },
        methods: {
            alert(){
                this.$alert('你是美少女战士')
            },
            modal(){
                this.$modal({
                    title: '变身',
                    bodyContent: ModalBody
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

<style scoped lang="scss">
    .plugins{
        font-size: 24px;
        button{
            padding: 10px;
            border: 1px solid grey;
        }
    }
</style>
