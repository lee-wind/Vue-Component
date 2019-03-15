<template>
    <div class="radio">
        <input :id="value" type="radio" :name="name"
               :value="value" :checked="model == value"
               @click="change">
        <label :for="value">
            <span class="icon">

            </span>
            <span class="text">
                <slot></slot>
            </span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "Radio",
            model: {
                prop: 'model',
                event: 'change'
            },
            props: {
                model: '',
                name: '',
                value: ''
            },
            methods: {
                change($event){
                    console.log($event.target.value);
                    this.$emit('change', $event.target.value)
                }
            }
    }
</script>

<style scoped lang="scss">
    .radio{
        display: inline-block;
        margin: 0 5px;
        font-size: 28px;
        label{
            display: inline-block;
            .icon{
                position: absolute;
                /*display: inline-block;*/
                /*vertical-align: middle;*/
                width: 30px;
                height: 30px;
                border: 1px solid grey;
                border-radius: 50%;
                cursor: pointer;
                &::before{
                    content: '';
                    display: block;
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                    border-radius: 50%;
                    background-color: grey;
                }
            }
            .text{
                /*display: inline-block;*/
                /*vertical-align: middle;*/
            }
            /*span{*/
                /*margin-left: 14px;*/
            /*}*/
        }
        input[type=radio]{
            display: none;
            /*&:checked+label {*/
                /*color: dodgerblue;*/
                /*border: 1px solid dodgerblue;*/
                /*&::after {*/
                    /*background-color: dodgerblue;*/
                /*}*/
            /*}*/
            /*&:checked+label+span{*/
                /*color: dodgerblue;*/
            /*}*/
        }
    }
</style>
