<template>
    <div class="radio">
        <input :id="value" type="radio" :name="name"
               :value="value" :checked="model == value"
               @click="change">
        <label :for="value"></label>
        <span>
            <slot></slot>
        </span>
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
        label{
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: 30px;
            height: 30px;
            border: 1px solid grey;
            border-radius: 50%;
            cursor: pointer;
            &::after{
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
        input[type=radio]{
            display: none;
            &:checked+label {
                border: 1px solid dodgerblue;
                &::after {
                    background-color: dodgerblue;
                }
            }
            &:checked+label+span{
                color: dodgerblue;
            }
        }
    }
</style>
