<template>
    <div class="submit">
        <input type="button" :value="value" @click="submit">
    </div>
</template>

<script>
    export default {
        name: "Submit",
        props: {
            value: {
                default: '提交'
            }
        },
        methods: {
            submit(){
                console.log('提交');
            }
        },
    }
</script>

<style scoped>

</style>
