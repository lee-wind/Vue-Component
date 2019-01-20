<template>
    <div class="checkbox">
        <input :id="value" type="checkbox" :value="value"
               :checked="model.includes(value)"
               @change="change">
        <label :for="value"></label>
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Checkbox",
        model: {
            prop: 'model',
            event: 'change'
        },
        props: {
            model: '',
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
    .checkbox{
        display: inline-block;
        margin: 0 5px;
        label{
            display: inline-block;
            vertical-align: middle;
            width: 15px;
            height: 15px;
            border: 1px solid grey;
            border-radius: 3px;
            cursor: pointer;
        }
        input[type=checkbox]{
            display: none;
            &:checked+label {
                $border: 1px solid dodgerblue;
                border: $border;
                &::after {
                    content: '';
                    display: block;
                    width: 5px;
                    height: 10px;
                    margin: 0 auto;
                    border-right: $border;
                    border-bottom: $border;
                    transform: rotate(35deg);
                }
            }
            &:checked+label+span{
                color: dodgerblue;
            }
        }
    }
</style>
